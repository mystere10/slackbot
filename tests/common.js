const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

exports.dbSync = async () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.06bhy.mongodb.net/slackbotTest?retryWrites=true&w=majority`
    )
    .then((result) => {
      //   console.log("Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
