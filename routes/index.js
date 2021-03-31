const express = require("express");
const botController = require("../controllers");

const router = express.Router();

router.get("/user-response/:userId", botController.getUserResponses);
router.get(
  "/user-response/:userId/question-one",
  botController.getFirstQuestion
);

router.get(
  "/user-response/:userId/question-two",
  botController.getSecondQuestion
);

router.get(
  "/user-response/:userId/question-three",
  botController.getThirdQuestion
);

router.get(
  "/user-response/:userId/question-four",
  botController.getFourthQuestion
);

module.exports = router;
