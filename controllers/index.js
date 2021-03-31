const botModel = require("../models");

exports.home = (req, res, nex) => {
  res.send("Welcome to Slack bot");
};

exports.getUserResponses = (req, res, next) => {
  const userId = req.params.userId;
  botModel
    .findOne({ userId: userId })
    .then((results) => {
      console.log(results);
      res.status(200).send(results);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getFirstQuestion = (req, res, next) => {
  const userId = req.params.userId;
  botModel
    .find({ userId: userId })
    .select("questionOneResponse")
    .then((results) => {
      console.log(results);
      res.status(200).send({
        "Welcome. How are you doing?": results,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getSecondQuestion = (req, res, next) => {
  const userId = req.params.userId;
  botModel
    .find({ userId: userId })
    .select("questionTwoResponse")
    .then((results) => {
      console.log(results);
      res.status(200).send({
        "When are you free this week for a walk?": results,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getThirdQuestion = (req, res, next) => {
  const userId = req.params.userId;
  botModel
    .find({ userId: userId })
    .select("questionThreeResponse")
    .then((results) => {
      console.log(results);
      res.status(200).send({
        "What are your favorite hobbies?": results,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getFourthQuestion = (req, res, next) => {
  const userId = req.params.userId;
  botModel
    .find({ userId: userId })
    .select("questionFourResponse")
    .then((results) => {
      console.log(results);
      res.status(200).send({
        "What are the first 3 digits on the number scale?": results,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
