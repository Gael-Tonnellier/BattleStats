import { ChannelType, Guild } from "discord.js";

const welcomeMessage = {
  color: 15548997,
  title: "Let's start with BattleStats ! ",
  description:
    "Thanks to add me to your server ! BattleStats is a fresh new discord bot who give you statistics about your favorite blizzard's game ! You will find below this description a list of supported games and commands to compare your achievements with your friends, try some and have fun !",
  fields: [
    { name: "Supported Games", value: "World of Warcraft / Overwatch" },
    {
      name: "Set your favorite game ( prevent long command).",
      value: "/fav.<wow|ow>",
    },
  ],
};

export const onGuildCreate = async (guildCreate: Guild) => {
  guildCreate.channels
    .create({
      name: "BattleStats",
      type: ChannelType.GuildText,
    })
    .then((channel) =>
      channel.send({ embeds: [welcomeMessage] }).then((msg) => msg.pin())
    );
};
