require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/tab-of-the-day-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();

const tabs = [
  {
    title: "Basic Blues Riff (in E)",
    tab:
`e|--------------------------|
B|--------------------------|
G|--------------------------|
D|--2--4--5-----5--4--2-----|
A|--------------------------|
E|--0-----------------0-----|`
  },

  {
    title: "Seven Nation Army - The White Stripes",
    tab:
`e|--------------------------|--------|
B|--------------------------|--------|
G|--------------------------|--------|
D|--------------------------|--------|
A|--7---7---10--7---5-------|--3--2--|
E|--------------------------|--------|`
  },

  {
  title: "All the Small Things - Blink-182",
  tab:
`e|------------------------------|
B|--5555555--6666666--5555555--5|
G|--5555555--5555555--5555555--5|
D|--3333333--3333333--3333333--3|
A|------------------------------|
E|------------------------------|`
},

{
  title: "love. - wave to earth",
  tab:
`e|-------------------------------------------------------|
B|--------------------7-9-10-6-7-9-10-12/14-12-----------|
G|------------6-7-9--------------------------------------|
D|--7-9--------------------------------------------------|
A|-------------------------------------------------------|
E|-------------------------------------------------------|

e|-------------------------------------------------------|
B|--10-9------12/14-12-10------12/14-12-10---------------|
G|-------11---------------11-----------------------------|
D|-------------------------------------------------------|
A|-------------------------------------------------------|
E|-------------------------------------------------------|`
},

{
  title: "Smoke on the Water - Deep Purple",
  tab:
`e|---------------------------------|
B|---------------------------------|
G|---------------------------------|
D|--0--3--5----0--3--6-5-----------|
A|--0--3--5----0--3--6-5-----------|
E|---------------------------------|`
},

{
  title: "Zinda - Bhaag Milkha Bhaag",
  tab:
`e|-------------------|-------------------|
B|-------------------|-------------------|
G|-------------------|-------------------|
D|-------------------|-------------------|
A|-------------------|-------------------|
E|--0--0--0--0-2-3-5-|--0--0--0--0-2-3---|`
},

{
  title: "Enter Sandman - Metallica",
  tab:
`e|-------------------|
B|-------------------|
G|-------------------|
D|--------5----------|
A|-----7--------7----|
E|--0--------6-5-----|`
}

  // add more tab objects here
];

const tips = [
  "Practice with a metronome. Even at a slow tempo, timing matters more than speed.",
  "Isolate the hardest 2 bars of a piece and loop just those before playing the whole thing.",
  "Switch chords slowly and cleanly before trying to speed up transitions.",
  "Record yourself playing, you'll hear mistakes your ear misses in the moment.",
  "Warm up with scales for 5 minutes before jumping into a song.",
  "If a riff feels impossible, try it one string at a time first.",
  "Rest days matter. Your hands build muscle memory even when you're not playing.",
  "Play along with the original track to understand the feel and dynamics of the song.",
  "Learn songs in different keys to improve your understanding of music theory and chord shapes.",
  "Watch live performances of your favorite songs to see how professional musicians approach them.",
];

app.command("/tab-of-the-day-get", async ({ command, ack, respond }) => {
  await ack();
  const random = tabs[Math.floor(Math.random() * tabs.length)];
  await respond({ text: `*${random.title}*\n\`\`\`${random.tab}\`\`\`` });
});

app.command("/tab-of-the-day-tip", async ({ command, ack, respond }) => {
  await ack();
  const tip = tips[Math.floor(Math.random() * tips.length)];
  await respond({ text: `💡 ${tip}` });
});

app.command("/tab-of-the-day-help", async ({ command, ack, respond }) => {
  await ack();
  const help = "Here are the available commands:\n\n" +
    "• `/tab-of-the-day-ping` - Check if the bot is alive.\n" +
    "• `/tab-of-the-day-get` - Get a random guitar tab.\n" +
    "• `/tab-of-the-day-tip` - Get a random guitar tip.\n" +
    "• `/tab-of-the-day-help` - Show this help message.";
  await respond({ text: `${help}` });
});


