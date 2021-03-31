## Slack bot
---

### Description

> This bot interacts with the user by asking and responding to different questions and save the user responses 
> in a mongodb database.

### Technologies used

- Nodejs v14.4
- Mongodb
- Mongoose
- Node slack SDK [link](https://github.com/slackapi/node-slack-sdk)

### Get started

- Clone the repo [link](https://github.com/mystere10/slackbot.git)
- Run npm install to install all dependencies
- Run npm start to start the app
- Run npm run test to run the tests

### Endpoints
> Here is a list of endpoints implemented to get user's responses to different questions

> API structure: https://nkunzislackbot.herokuapp.com/api/user-response/:userId/question-number

> - [GET](https://nkunzislackbot.herokuapp.com/api/user-response/U01SN0VJ50T) to get user's answers
> - [GET](https://nkunzislackbot.herokuapp.com/api/user-response/U01SN0VJ50T/question-one) to get user's question one answer
> - [GET](https://nkunzislackbot.herokuapp.com/api/user-response/U01SN0VJ50T/question-two) to get user's question two answer
> - [GET](https://nkunzislackbot.herokuapp.com/api/user-response/U01SN0VJ50T/question-three) to get user's question three answer
> - [GET](https://nkunzislackbot.herokuapp.com/api/user-response/U01SN0VJ50T/question-four) to get user's question four answer
