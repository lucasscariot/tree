/**
 * @flow
 */
import mongoose from 'mongoose'
import { app } from './app'
import { channels, users, messages } from './routes'
import config from './config'

const { MONGO } = config

mongoose.connect(MONGO, (err) => {
  if (err) { throw Error(err) } else { console.log('Connected to Database') }
})

app.use('/', channels)
app.use('/', users)
app.use('/', messages)

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'))

console.log(`listen http://0.0.0.0:${app.get('port')}`)
