var _ = require('lodash')
var Promise = require('bluebird')

var IS_BROWSER = typeof window !== 'undefined'

if (IS_BROWSER) {
	// The browser mock assumes global fetch prototypes exist
	// Can improve after https://github.com/wheresrhys/fetch-mock/issues/158
	var realFetchModule = require('fetch-ponyfill')({ Promise: Promise })
	_.assign(window, _.pick(realFetchModule, 'Headers', 'Request', 'Response'))
}

var fetchMock = require('fetch-mock').sandbox(Promise)

// Promise sandbox config needs a little help. See:
// https://github.com/wheresrhys/fetch-mock/issues/159#issuecomment-268249788
fetchMock.fetchMock.Promise = Promise

module.exports = {
	fetchMock: fetchMock,
	mockedFetch: fetchMock.fetchMock
} 