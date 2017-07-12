/**
 * @flow
 */
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import forest from 'forest-express-mongoose'
import mongoose from 'mongoose'
import morgan from 'morgan'
import config from './config'


const { FOREST_ENV_SECRET, FOREST_AUTH_SECRET } = config
const app = express()
const router = express.Router()
const Schema = mongoose.Schema

mongoose.set('debug', true)
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(forest.init({
  modelsDir: `${__dirname}/schemas`,
  envSecret: FOREST_ENV_SECRET,
  authSecret: FOREST_AUTH_SECRET,
  mongoose,
}))

export { app, router, Schema, mongoose }
