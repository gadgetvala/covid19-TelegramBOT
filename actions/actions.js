const { getIndiaAPI, getWorldAPI } = require('./../utils/api');
const { startMessage, countryListM, otherCountryM, creditM, developerM, botInfoM } = require('./../messages/messages');
const {
	stateMarkup,
	startMarkup,
	indiaMarkup,
	stateActionListMarkup,
	globalMarkup,
	otherCountryMarkup,
	countryListMarkup,
	botInfoMarkup,
	creditMarkup,
	developerMarkup
} = require('./../utils/keyboardMarkup');

exports.indiaAction = async (ctx) => {
	try {
		const data = await getIndiaAPI();
		let dataIndia = data.data.statewise[0];

		let message = `
Active: ${dataIndia.active}\n
Confirmed: ${dataIndia.confirmed}\n
Deaths: ${dataIndia.deaths}\n
Recovered: ${dataIndia.recovered}\n
Last Update : ${dataIndia.lastupdatedtime}
`;
		ctx.deleteMessage();
		bot.telegram.sendMessage(ctx.chat.id, message, {
			reply_markup: {
				inline_keyboard: indiaMarkup
			}
		});
	} catch (err) {
		console.log(err);
		ctx.reply('Something went wrong please Try Again');
	}
};

exports.stateAction = (ctx) => {
	ctx.deleteMessage();
	let message = `Select State`;
	bot.telegram.sendMessage(ctx.chat.id, message, {
		reply_markup: {
			inline_keyboard: stateMarkup
		}
	});
};

exports.stateActionListAction = async (ctx) => {
	try {
		const data = await getIndiaAPI();

		let dataState = data.data.statewise.filter((cur, index) => {
			if (cur.state === ctx.match) {
				return index;
			}
		});

		let message = `
Location: ${ctx.match}\n
Active: ${dataState[0].active}\n
Confirmed: ${dataState[0].confirmed}\n
Deaths: ${dataState[0].deaths}\n
Recovered: ${dataState[0].recovered}\n
Last Update : ${dataState[0].lastupdatedtime}
`;
		ctx.deleteMessage();
		bot.telegram.sendMessage(ctx.chat.id, message, {
			reply_markup: {
				inline_keyboard: stateActionListMarkup
			}
		});
	} catch (err) {
		console.log(err);
		ctx.reply('Something went wrong please Try Again');
	}
};

exports.globalAction = async (ctx) => {
	try {
		const global = await getWorldAPI();

		let message = `
Location: ${global.data.displayName}\n
Total Confirmed: ${global.data.totalConfirmed}\n
Total Death: ${global.data.totalDeaths}\n
Total Recovered: ${global.data.totalRecovered}\n
Last Updated: ${global.data.lastUpdated}
`;
		ctx.deleteMessage();

		bot.telegram.sendMessage(ctx.chat.id, message, {
			reply_markup: {
				inline_keyboard: globalMarkup
			}
		});
	} catch (err) {
		console.log(err);
		ctx.reply('Something went wrong please Try Again');
	}
};

exports.otherCountryAction = (ctx) => {
	ctx.deleteMessage();
	bot.telegram.sendMessage(ctx.chat.id, otherCountryM, {
		reply_markup: {
			inline_keyboard: otherCountryMarkup
		}
	});
};

exports.otherCountryCommand = async (ctx) => {
	try {
		const global = await getWorldAPI();

		const input = ctx.message.text;
		let countryNameInput = input.split(' ');
		countryNameInput.shift();

		let countryName = countryNameInput.join('').toLowerCase();

		const country = global.data.areas.filter((curr, index) => {
			countryList.push(curr.displayName);
			if (curr.id == countryName) {
				return index;
			}
		});

		let message = `
Location: ${country[0].displayName}\n
Total Confirmed: ${country[0].totalConfirmed}\n
Total Death: ${country[0].totalDeaths}\n
Total Recovered: ${country[0].totalRecovered}\n
Last Updated: ${country[0].lastUpdated}
`;
		ctx.deleteMessage();
		ctx.reply(message);
	} catch (err) {
		console.log(err);
		ctx.reply('Something went wrong please Try Again');
	}
};

exports.countryListAction = async (ctx) => {
	ctx.deleteMessage();
	bot.telegram.sendMessage(ctx.chat.id, countryListM, {
		reply_markup: {
			inline_keyboard: countryListMarkup
		}
	});
};

exports.botInfoAction = (ctx) => {
	ctx.deleteMessage();
	bot.telegram.sendMessage(ctx.chat.id, botInfoM, {
		reply_markup: {
			inline_keyboard: botInfoMarkup
		}
	});
};

exports.creditAction = (ctx) => {
	ctx.deleteMessage();
	bot.telegram.sendMessage(ctx.chat.id, creditM, {
		reply_markup: {
			inline_keyboard: creditMarkup
		}
	});
};

exports.developerAction = (ctx) => {
	ctx.deleteMessage();
	bot.telegram.sendMessage(ctx.chat.id, developerM, {
		reply_markup: {
			inline_keyboard: developerMarkup
		}
	});
};
