/**
 * @flow
 */
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
// import forest from 'forest-express-mongoose'
// import mongoose from 'mongoose'
// import { FOREST_AUTH_SECRET, FOREST_ENV_SECRET } from './config'

const app = express()
const router = express.Router()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.use(forest.init({
//   modelsDir: `${__dirname}/schemas`,
//   envSecret: FOREST_ENV_SECRET,
//   authSecret: FOREST_AUTH_SECRET,
//   mongoose,
// }))

export { app, router }
