var _ = require('lodash')
var Promise = require('bluebird')

var fetchMock = require('fetch-mock').sandbox(Promise)
var realFetch = require('fetch-ponyfill')({ Promise: Promise })
fetchMock.setImplementations(_.assign({ Promise: Promise }, realFetch))

module.exports = {
	fetchMock: fetchMock,
	mockedFetch: fetchMock.fetchMock
}
