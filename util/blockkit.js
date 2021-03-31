const welcomeBlock = {
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Welcome. How are you doing?",
      },
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Doing Well",
            emoji: true,
          },
          value: "Doing Well",
          action_id: "selected_mood_1",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Neutral",
            emoji: true,
          },
          value: "Neutral",
          action_id: "selected_mood_2",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Feeling Lucky",
            emoji: true,
          },
          value: "Feeling Lucky",
          action_id: "selected_mood_3",
        },
      ],
    },
    {
      type: "divider",
    },
  ],
};

const planBlock = {
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "When are you free this week for a walk?",
      },
      accessory: {
        type: "static_select",
        placeholder: {
          type: "plain_text",
          text: "Select an item",
          emoji: true,
        },
        options: [
          {
            text: {
              type: "plain_text",
              text: "12:00",
              emoji: true,
            },
            value: "12:00",
          },
          {
            text: {
              type: "plain_text",
              text: "12:30",
              emoji: true,
            },
            value: "12:30",
          },
          {
            text: {
              type: "plain_text",
              text: "13:00",
              emoji: true,
            },
            value: "13:00",
          },
          {
            text: {
              type: "plain_text",
              text: "13:30",
              emoji: true,
            },
            value: "13:30",
          },
          {
            text: {
              type: "plain_text",
              text: "14:00",
              emoji: true,
            },
            value: "14:00",
          },
          {
            text: {
              type: "plain_text",
              text: "14:30",
              emoji: true,
            },
            value: "14:30",
          },
          {
            text: {
              type: "plain_text",
              text: "15:00",
              emoji: true,
            },
            value: "15:00",
          },
          {
            text: {
              type: "plain_text",
              text: "15:30",
              emoji: true,
            },
            value: "15:30",
          },
          {
            text: {
              type: "plain_text",
              text: "16:00",
              emoji: true,
            },
            value: "16:00",
          },
          {
            text: {
              type: "plain_text",
              text: "16:30",
              emoji: true,
            },
            value: "16:30",
          },
          {
            text: {
              type: "plain_text",
              text: "17:00",
              emoji: true,
            },
            value: "17:00",
          },
          {
            text: {
              type: "plain_text",
              text: "17:30",
              emoji: true,
            },
            value: "17:30",
          },
          {
            text: {
              type: "plain_text",
              text: "18:00",
              emoji: true,
            },
            value: "18:00",
          },
        ],
        action_id: "static_select-action",
      },
    },
    {
      type: "divider",
    },
  ],
};

const hobbiesBlock = {
  blocks: [
    {
      type: "section",
      block_id: "section678",
      text: {
        type: "mrkdwn",
        text: "What are your favorite hobbies?",
      },
      accessory: {
        action_id: "hobbies",
        type: "multi_static_select",
        placeholder: {
          type: "plain_text",
          text: "Select items",
        },
        options: [
          {
            text: {
              type: "plain_text",
              text: "Football",
            },
            value: "Football",
          },
          {
            text: {
              type: "plain_text",
              text: "Music",
            },
            value: "Music",
          },
          {
            text: {
              type: "plain_text",
              text: "Sleep",
            },
            value: "Sleep",
          },
          {
            text: {
              type: "plain_text",
              text: "Movies",
            },
            value: "Movies",
          },
          {
            text: {
              type: "plain_text",
              text: "Basketball",
            },
            value: "Basketball",
          },
        ],
      },
    },
    {
      type: "divider",
    },
  ],
};

const digitsBlock = {
  blocks: [
    {
      type: "section",
      block_id: "section678",
      text: {
        type: "mrkdwn",
        text: "What are the first 3 digits on the number scale?",
      },
      accessory: {
        type: "button",
        text: {
          type: "plain_text",
          text: "Click Me",
          emoji: true,
        },
        value: "click_me_123",
        action_id: "open_modal_button",
      },
    },
    {
      type: "divider",
    },
  ],
};

const inputDigitsModalBlock = {
  title: {
    type: "plain_text",
    text: "Add three digits",
    emoji: true,
  },
  submit: {
    type: "plain_text",
    text: "Save",
    emoji: true,
  },
  type: "modal",
  callback_id: "number_scale_modal_submit",
  blocks: [
    {
      type: "input",
      block_id: "number_scale_selection_block",
      element: {
        type: "plain_text_input",
        action_id: "plain_text_input_action",
      },
      label: {
        type: "plain_text",
        text: "Label",
        emoji: true,
      },
    },
    {
      block_id: "target_channel",
      type: "input",
      label: {
        type: "plain_text",
        text: "Select a channel to post the result on",
      },
      element: {
        action_id: "target_select",
        type: "conversations_select",
        response_url_enabled: true,
      },
    },
  ],
};

const thankYouBlock = {
  blocks: [
    {
      type: "section",
      text: {
        type: "plain_text",
        text: "Thank you!",
        emoji: true,
      },
    },
  ],
};

module.exports = {
  welcomeBlock,
  planBlock,
  hobbiesBlock,
  digitsBlock,
  inputDigitsModalBlock,
  thankYouBlock,
};
