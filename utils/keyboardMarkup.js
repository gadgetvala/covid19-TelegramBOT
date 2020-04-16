exports.startMarkup = [
	[
		{ text: 'India', callback_data: 'india' },
		{ text: 'By State', callback_data: 'state' }
	],
	[
		{ text: 'Other Country', callback_data: 'otherCountry' },
		{ text: 'Global', callback_data: 'global' }
	],
	[{ text: 'Bot Info', callback_data: 'botInfo' }]
];

exports.indiaMarkup = [[{ text: 'Back to Start', callback_data: 'start' }]];

exports.stateMarkup = [
	[
		{ text: 'Maharashtra', callback_data: 'Maharashtra' },
		{ text: 'Tamil Nadu', callback_data: 'Tamil Nadu' },
		{ text: 'Chhattisgarh', callback_data: 'Chhattisgarh' }
	],
	[
		{ text: 'Jharkhand', callback_data: 'Jharkhand' },
		{ text: 'Chandigarh', callback_data: 'Chandigarh' },
		{ text: 'Uttarakhand', callback_data: 'Uttarakhand' }
	],
	[
		{ text: 'Delhi', callback_data: 'Delhi' },
		{ text: 'Rajasthan', callback_data: 'Rajasthan' },
		{ text: 'Bihar', callback_data: 'Bihar' }
	],
	[
		{ text: 'Punjab', callback_data: 'Punjab' },
		{ text: 'Odisha', callback_data: 'Odisha' },
		{ text: 'Assam', callback_data: 'Assam' }
	],
	[
		{ text: 'Goa', callback_data: 'Goa' },
		{ text: 'Manipur', callback_data: 'Manipur' },
		{ text: 'Tripura', callback_data: 'Tripura' }
	],
	[
		{ text: 'Nagaland', callback_data: 'Nagaland' },
		{ text: 'Meghalaya', callback_data: 'Meghalaya' },
		{ text: 'Sikkim', callback_data: 'Sikkim' }
	],

	[
		{ text: 'Haryana', callback_data: 'Haryana' },
		{ text: 'Ladakh', callback_data: 'Ladakh' },
		{ text: 'Kerala', callback_data: 'Kerala' }
	],
	[
		{ text: 'Gujarat', callback_data: 'Gujarat' },
		{ text: 'Telangana', callback_data: 'Telangana' },
		{ text: 'Puducherry', callback_data: 'Puducherry' }
	],
	[
		{ text: 'Madhya Pradesh', callback_data: 'Madhya Pradesh' },
		{ text: 'Uttar Pradesh', callback_data: 'Uttar Pradesh' },
		{ text: 'Karnataka', callback_data: 'Karnataka' }
	],
	[
		{ text: 'Andhra Pradesh', callback_data: 'Andhra Pradesh' },
		{ text: 'Jammu and Kashmir', callback_data: 'Jammu and Kashmir' },
		{ text: 'Lakshadweep', callback_data: 'Lakshadweep' }
	],
	[
		{ text: 'West Bengal', callback_data: 'West Bengal' },
		{ text: 'Himachal Pradesh', callback_data: 'Himachal Pradesh' },
		{ text: 'Daman & Diu', callback_data: 'Daman & Diu' }
	],
	[
		{ text: 'Arunachal Pradesh', callback_data: 'Arunachal Pradesh' },
		{ text: 'Dadra and Nagar Haveli', callback_data: 'Dadra and Nagar Haveli' }
	],
	[{ text: 'Andaman and Nicobar Islands', callback_data: 'Andaman and Nicobar Islands' }],
	[{ text: 'Back to Start', callback_data: 'start' }]
];

exports.stateActionListMarkup = [
	[{ text: 'Back to State', callback_data: 'state' }],
	[{ text: 'Back to Start', callback_data: 'start' }]
];

exports.globalMarkup = [[{ text: 'Back to Start', callback_data: 'start' }]];

exports.otherCountryMarkup = [
	[{ text: 'Country List', callback_data: 'countryList' }],
	[{ text: 'Back to Start', callback_data: 'start' }]
];

exports.countryListMarkup = [
	[{ text: 'Back to Country', callback_data: 'otherCountry' }],
	[{ text: 'Back to Start', callback_data: 'start' }]
];

exports.botInfoMarkup = [
	[
		{ text: 'Credit', callback_data: 'credit' },
		{ text: 'Developer', callback_data: 'developer' }
	],
	[{ text: 'Back to Start', callback_data: 'start' }]
];

exports.creditMarkup = [
	[{ text: 'Back to BOT info', callback_data: 'botInfo' }],
	[{ text: 'Back to Start', callback_data: 'start' }]
];

exports.developerMarkup = [
	[{ text: 'Back to BOT info', callback_data: 'botInfo' }],
	[{ text: 'Back to Start', callback_data: 'start' }]
];
