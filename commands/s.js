const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {

  try {
    if (!args[0] && message.channel.id != '570803215310782480') return message.channel.send('Proper Usage: +s word');

    var one = ["a", "e", "i", "o", "u", "l", "n", "s", "t", "r"];
    var two = ["d", "g"];
    var three = ["b", "c", "m", "p"];
    var four = ["f", "h", "v", "w", "y"];
    var five = ["k"];
    var eight = ["j", "x"];
    var ten = ["q", "z"];

    var score = 0;
    for (var i = 3; i < message.content.length; i++) {
      if (one.includes(message.content.charAt(i).toLowerCase())) {
        score += 1;
      }
      else if (two.includes(message.content.charAt(i).toLowerCase())) {
        score += 2;
      }
      else if (three.includes(message.content.charAt(i).toLowerCase())) {
        score += 3;
      }
      else if (four.includes(message.content.charAt(i).toLowerCase())) {
        score += 4;
      }
      else if (five.includes(message.content.charAt(i).toLowerCase())) {
        score += 5;
      }
      else if (eight.includes(message.content.charAt(i).toLowerCase())) {
        score += 8;
      }
      else if (ten.includes(message.content.charAt(i).toLowerCase())) {
        score += 10;
      }
    }

    const embed = new Discord.RichEmbed()
      .setColor(16754843)
      .setTitle('Scrabble Score')
      //.setDescription('fk off')
      .setDescription(`**${args.join(' ')}**: ${score}`)

    if(message.channel.id != '570803215310782480'){
    message.channel.send(embed);

    message.delete({ timeout: 1000 });
    }

  } catch (e) {
    console.log(e);
  }

}
