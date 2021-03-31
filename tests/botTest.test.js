const chai = require("chai");
const path = require("path");
const faker = require("faker");
const { dbSync } = require(path.resolve("tests", "common"));
const BotModel = require("../models");
chai.use(require("chai-as-promised"));
const expect = chai.expect;

describe("Model botModel(userId: String, username: String, questionOneResponse: String, questionTwoResponse: String...)", () => {
  before(async () => {
    await dbSync();
  });
  // afterEach(async () => {
  //     await botModel.destroy({ cascade: true, force: true, truncate: true });
  // });

  it("should not save without userId", async () => {
    const bot = new BotModel();
    return expect(
      bot.validate({ fields: ["userId"] })
    ).to.eventually.be.rejectedWith(Error);
  });

  it("should not save without username", async () => {
    const bot = new BotModel();
    return expect(
      bot.validate({ fields: ["username"] })
    ).to.eventually.be.rejectedWith(Error);
  });

  describe("userId and username are provided and valid", () => {
    it("Should save if new Hobby", async () => {
      const bot = new BotModel({
        userId: faker.internet.password(11, false, /[^a-zA-Z0-9]/),
        username: faker.random.alphaNumeric(6),
      });
      return expect(bot.save()).to.eventually.be.fulfilled.and.be.an("object");
    });
  });
});


// describe(`PUT ${API.auth.validateAccount}`, () => {
//     let authorization;
//     let code;

//     beforeEach(async () => {
//         const { body } = await request.post(API.auth.signup).send(signupData);
//         const { VerificationToken } = await User.findOne({ include: [{ association: 'VerificationToken' }] });
//         authorization = body.authorization;
//         code = VerificationToken.token;
//     });

//     it('Should respond with 401 if the authorization header is missing', async () => {
//         return await request.put(API.auth.validateAccount).expect(response => {
//             expect(response.status).to.be.equals(401);
//         });
//     });

//     it('Should respond with 401 if the authorization header is invalid', async () => {
//         return await request
//             .put(API.auth.validateAccount)
//             .set('authorization', faker.random.alphaNumeric(15))
//             .expect(response => {
//                 expect(response.status).to.be.equals(401);
//             });
//     });

//     it('Should respond with 400 if code is not provided', async () => {
//         return await request
//             .put(API.auth.validateAccount)
//             .set('authorization', authorization)
//             .expect(response => {
//                 expect(response.status).to.be.equals(400);
//                 const error = response.body.errors;
//                 expect(error).to.be.an('array');
//                 expect(error).to.all.have.property('field');
//                 expect(error).to.all.have.property('message');
//             });
//     });