# tab-of-the-day

A Slack bot that sends a random guitar tab or practice tip whenever you need something to work on.

# Why I made this

I love playing guitar, but I often lose motivation when I don't know what to practice, I end up just wasting time and loosing motivation instead of actually improving. I also prefer learning riffs over full songs since they're quicker and more fun for me. This bot solves that by just handing me something to practice right inside Slack where I'm already spend a lot of my time.

## Commands

- `/tab-of-the-day-ping` - check the bot's alive
- `/tab-of-the-day-get` — get a random guitar tab
- `/tab-of-the-day-tip` — get a random practice tip

# Built with
- Node.js
- Slack Bolt for the Slack integration
- Hosted 24/7 on Nest (running as a systemd service so it stays online even when my laptop is off)

# How to test it
Add the bot to any channel with `/invite @tab-of-the-day`, type one of the commands above and hit enter. 

# Setup (to run your own copy)
1) Clone this repo
2) Run npm install to get dependencies
3) Create a Slack app at [api.slack.com/apps](api.slack.com/apps) and enable Socket Mode
4) Create a .env file in the project root with:
   `SLACK_BOT_TOKEN=xoxb-your-token-here`
   `SLACK_APP_TOKEN=xapp-your-token-here`
5) Run node index.js to start the bot locally
6) Register the slash commands in your Slack app dashboard to match the ones in the code (they're listed above)

# What's next
- Add more tabs to the library (maybe figure out how to integrate an api)
- Can add a command that lets people suggest a tab to add
- Add difficulty levels (beginner/intermediate) to the tabs to make it more personalizable

