resin-fetch-mock
=============

> Common util to mock fetch requests in resin tests

[![npm version](https://badge.fury.io/js/resin-fetch-mock.svg)](http://badge.fury.io/js/resin-fetch-mock)
[![dependencies](https://david-dm.org/resin-io-modules/resin-fetch-mock.svg)](https://david-dm.org/resin-io-modules/resin-fetch-mock.svg)
<!--
[![Build Status](https://travis-ci.org/resin-io-modules/resin-fetch-mock.svg?branch=master)](https://travis-ci.org/resin-io-modules/resin-fetch-mock)
[![Build status](https://ci.appveyor.com/api/projects/status/8qmwhh1vhm27otn4/branch/master?svg=true)](https://ci.appveyor.com/project/resin-io/resin-fetch-mock/branch/master)
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/resin-io/chat)
-->

Installation
------------

Install `resin-fetch-mock` by running:

```sh
$ npm install --save resin-fetch-mock
```

Documentation
-------------

The module exposes two methods:

```javascript
const { fetchMock, mockedFetch } = require("resin-fetch-mock")
```

The `fetchMock` is a _[sandboxed](https://github.com/wheresrhys/fetch-mock#sandboxpromise-experimental)_
instance of [`fetch-mock`](https://github.com/wheresrhys/fetch-mock)
preconfigured with the `Bluebird` Promise implementation.

Use it according to the [fetch-mock documentation](https://github.com/wheresrhys/fetch-mock#mocking-calls-to-fetch).

The `mockedFetch` function can be injected into your code as a drop-in replacement
of the original `fetch`.

**Note:** in the browser environment requiring this module will set the
`Headers`, `Request`, and `Response` constructors globally.
These constructors are taken from the `[fetch-ponyfill](https://github.com/qubyte/fetch-ponyfill)` module.

Support
-------

If you're having any problem, please [raise an issue](https://github.com/resin-io-modules/resin-fetch-mock/issues/new) on GitHub and the Resin.io team will be happy to help.

Contribute
----------

- Issue Tracker: [github.com/resin-io-modules/resin-fetch-mock/issues](https://github.com/resin-io-modules/resin-fetch-mock/issues)
- Source Code: [github.com/resin-io-modules/resin-fetch-mock](https://github.com/resin-io-modules/resin-fetch-mock)

License
-------

The project is licensed under the Apache 2.0 license.
