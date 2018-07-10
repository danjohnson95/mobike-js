# Mobike JS API

[![Build Status](https://travis-ci.com/danjohnson95/mobike-js.svg?branch=master)](https://travis-ci.com/danjohnson95/mobike-js)

A JavaScript wrapper for Mobike's API, allowing you to easily find nearby bikes 🚲

## Installation

```bash
$ npm install --save mobike-js
```

## Usage

```javascript
const mobike = require('mobike-js');

const latitude = 51.5188;
const longitude = 0.0814;

mobike.getBikesNear(latitude, longitude)
    .then((bikes) => {
        // Bikes near the specified location are returned.
    })
```