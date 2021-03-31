const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { createEventAdapter } = require("@slack/events-api");
const { WebClient } = require("@slack/web-api");
const { createMessageAdapter } = require("@slack/interactive-messages");
const BotRoute = require("./routes");
const Bot = require("./models");

// Block kits
const {
  welcomeBlock,
  planBlock,
  hobbiesBlock,
  digitsBlock,
  inputDigitsModalBlock,
  thankYouBlock,
} = require("./util/blockkit");
const app = express();

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);
const slackInteractions = createMessageAdapter(
  process.env.SLACK_SIGNING_SECRET
);

app.use("/slack/events", slackEvents.expressMiddleware());
app.use("/slack/actions", slackInteractions.expressMiddleware());
app.use("/api", BotRoute);

const token = process.env.SLACK_BOT_TOKEN;
const webClient = new WebClient(token);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

slackEvents.on("app_mention", async (event) => {
  try {
    const mentionResponseBlock = {
      ...welcomeBlock,
      ...{ channel: event.channel },
    };
    const res = await webClient.chat.postMessage(mentionResponseBlock);
    console.log("Message sent: ", res.ts);
  } catch (e) {
    console.log(e);
  }
});

slackInteractions.action({ actionId: "selected_mood_1" }, async (payload) => {
  try {
    const mood = payload.actions[0].value;
    const newBot = Bot.updateOne(
      { userId: payload.user.id },
      {
        $set: {
          userId: payload.user.id,
          username: payload.user.username,
          questionOneResponse: mood,
        },
      },
      { upsert: true }
    );
    newBot
      .then((result) => {
        console.log("Created");
      })
      .catch((err) => {
        console.log(err);
      });
    const mentionResponseBlock = {
      ...planBlock,
      ...{ channel: payload.channel.id },
    };
    const res = await webClient.chat.postMessage(mentionResponseBlock);
    console.log("Message sent: ", res.ts);
  } catch (e) {
    console.log(e);
  }

  return {
    text: "Processing...",
  };
});

slackInteractions.action({ actionId: "selected_mood_2" }, async (payload) => {
  try {
    const mood = payload.actions[0].value;
    const newBot = Bot.updateOne(
      { userId: payload.user.id },
      {
        $set: {
          userId: payload.user.id,
          username: payload.user.username,
          questionOneResponse: mood,
        },
      },
      { upsert: true }
    );
    newBot
      .then((result) => {
        console.log("Created");
      })
      .catch((err) => {
        console.log(err);
      });
    const mentionResponseBlock = {
      ...planBlock,
      ...{ channel: payload.channel.id },
    };
    const res = await webClient.chat.postMessage(mentionResponseBlock);
    console.log("Message sent: ", res.ts);
  } catch (e) {
    console.log(e);
  }

  return {
    text: "Processing...",
  };
});

slackInteractions.action({ actionId: "selected_mood_3" }, async (payload) => {
  try {
    const mood = payload.actions[0].value;
    const newBot = Bot.updateOne(
      { userId: payload.user.id },
      {
        $set: {
          userId: payload.user.id,
          username: payload.user.username,
          questionOneResponse: mood,
        },
      },
      { upsert: true }
    );
    newBot
      .then((result) => {
        console.log("Created");
      })
      .catch((err) => {
        console.log(err);
      });
    const mentionResponseBlock = {
      ...planBlock,
      ...{ channel: payload.channel.id },
    };
    const res = await webClient.chat.postMessage(mentionResponseBlock);
    console.log("Message sent: ", res.ts);
  } catch (e) {
    console.log(e);
  }

  return {
    text: "Processing...",
  };
});

slackInteractions.action(
  { actionId: "static_select-action" },
  async (payload) => {
    try {
      const questionTwo = payload.actions[0].selected_option.value;
      const newBot = Bot.updateOne(
        { userId: payload.user.id },
        {
          $set: {
            userId: payload.user.id,
            username: payload.user.username,
            questionTwoResponse: questionTwo,
          },
        },
        { upsert: true }
      );
      newBot
        .then((result) => {
          console.log("Created");
        })
        .catch((err) => {
          console.log(err);
        });
      const mentionResponseBlock = {
        ...hobbiesBlock,
        ...{ channel: payload.channel.id },
      };
      const res = await webClient.chat.postMessage(mentionResponseBlock);
      console.log("Message sent: ", res.ts);
    } catch (e) {
      console.log(e);
    }

    return {
      text: "Processing...",
    };
  }
);

slackInteractions.action({ actionId: "hobbies" }, async (payload) => {
  try {
    const selectedHobbies = payload.actions[0].selected_options.map(
      (option) => option.value
    );
    const newBot = Bot.updateOne(
      { userId: payload.user.id },
      {
        $set: {
          userId: payload.user.id,
          username: payload.user.username,
          questionThreeResponse: selectedHobbies,
        },
      },
      { upsert: true }
    );
    newBot
      .then((result) => {
        console.log("Created");
      })
      .catch((err) => {
        console.log(err);
      });
    // After
    const mentionResponseBlock = {
      ...digitsBlock,
      ...{ channel: payload.channel.id },
    };
    const res = await webClient.chat.postMessage(mentionResponseBlock);
    console.log("Message sent: ", res.ts);
  } catch (e) {
    console.log(e);
  }

  return {
    text: "Processing...",
  };
});

slackInteractions.action({ actionId: "open_modal_button" }, async (payload) => {
  try {
    await webClient.views.open({
      trigger_id: payload.trigger_id,
      view: inputDigitsModalBlock,
      notify_on_close: true,
    });
  } catch (e) {
    console.log(e);
  }

  return {
    channel: payload.channel,
  };
});

slackInteractions.viewSubmission(
  "number_scale_modal_submit",
  async (payload) => {
    const blockData = payload.view.state;

    if (payload.response_urls.length) {
      const mentionResponseBlock = {
        ...thankYouBlock,
        ...{ channel: payload.response_urls[0].channel_id },
      };
      await webClient.chat.postMessage(mentionResponseBlock);
    }
    const numberScale =
      blockData.values.number_scale_selection_block.plain_text_input_action
        .value;

    const isNumeric = (value) => {
      return /^\d+$/.test(value);
    };

    if (numberScale.length !== 3 || !isNumeric(numberScale)) {
      return {
        response_action: "errors",
        errors: {
          number_scale_selection_block:
            "The number scale must be three digits.",
        },
      };
    }

    const newBot = Bot.updateOne(
      { userId: payload.user.id },
      {
        $set: {
          userId: payload.user.id,
          username: payload.user.username,
          questionFourResponse: numberScale,
        },
      },
      { upsert: true }
    );
    newBot
      .then((result) => {
        console.log("Created");
      })
      .catch((err) => {
        console.log(err);
      });

    return {
      response_action: "clear",
    };
  }
);

const port = process.env.PORT || 3000;

// Starts server
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.06bhy.mongodb.net/slackbot?retryWrites=true&w=majority`
  )
  .then((result) => {
    app.listen(port);
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
