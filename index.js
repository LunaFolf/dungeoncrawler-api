require('dotenv').config()

const { TrestleAPI } = require('@whiskeedev/trestle')

const api = new TrestleAPI({ port: 8081 })