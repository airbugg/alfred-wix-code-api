'use strict'
const alfy = require('alfy')

const BASE_URL = 'https://www.wix.com/code/reference'
const API_REFERENCE_URL = `${BASE_URL}/scripts/search.data.json`

const formatTitle = ({ title, subtitle }) => `${subtitle}.${title}`
const formatArg = ({ url }) => `${BASE_URL}/${url}`

const formatResult = result => ({
	uid: formatTitle(result),
	title: formatTitle(result),
	subtitle: result.content,
	arg: formatArg(result),
	quicklookurl: formatArg(result),
	match: formatTitle(result),
})

alfy.fetch(API_REFERENCE_URL).then(results => {
	alfy.output(results.map(formatResult))
})
