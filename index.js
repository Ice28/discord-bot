import os

const { time } = require('console');
const Discord = require('discord.js');
const { Server } = require('http');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
	if (msg.content === "!가위바위보 가위") {
	const human = msg.content;
	const list = ["저는 가위를 냈어요. 비겼네요.", "저는 바위를 냈어요. 제가 이겼네요!", "저는 보를 냈어요. 제가 졌네요.."];
	const random = Math.floor(Math.random() * 3);
  
	const bot = list[random];
  
	msg.channel.send(bot);
	}
});

client.on("message", (msg) => {
	if (msg.content === "!가위바위보 바위") {
	const human = msg.content;
	const list = ["저는 가위를 냈어요. 제가 졌네요..", "저는 바위를 냈어요. 비겼네요.", "저는 보를 냈어요. 제가 이겼네요!"];
	const random = Math.floor(Math.random() * 3);
  
	const bot = list[random];
  
	msg.channel.send(bot);
	}
});

client.on("message", (msg) => {
	if (msg.content === "!가위바위보 보") {
	const human = msg.content;
	const list = ["저는 가위를 냈어요. 제가 이겼네요!", "저는 바위를 냈어요. 제가 졌네요..", "저는 보를 냈어요. 비겼네요."];
	const random = Math.floor(Math.random() * 3);
  
	const bot = list[random];
  
	msg.channel.send(bot);
	}
});

client.on("message", (msg) => {
	if (msg.content === "!안녕") {
	const human = msg.content;
	const list = ["안녕하세요!", "반가워요!", "반갑습니다!"];
	const random = Math.floor(Math.random() * 3);
  
	const bot = list[random];
  
	msg.channel.send(bot);
	}
});

client.on("message", (msg) => {
	if (msg.content === "!주사위") {
	const human = msg.content;
	const list = ["🎲  :one:  🎲", "🎲  :two:  🎲", "🎲  :three:  🎲", "🎲  :four:  🎲", "🎲  :five:  🎲", "🎲  :six:  🎲"];
	const random = Math.floor(Math.random() * 6);
  
	const bot = list[random];
  
	msg.channel.send(bot);
	}
});

access_token = os.environ["BOT_TOKEN"]
client.login(access_token);
