/**
 * @flow
 */
import Messages from '../schemas/messages'

export const getMessages = (req, res) => {
  Messages
    .find()
    .then((data) => { res.status(200).json(data) })
    .catch((err) => { res.status(400).json({ error: true, message: err.toString() }) })
}

export const putUser = (req, res) => {
  Messages
    .findOne({ _id: req.params.messageId }).exec()
    .then((message) => {
      const updatedMessage = message
      if (req.body.firstName) { updatedMessage.firstName = req.body.firstName }
      if (req.body.lastName) { updatedMessage.lastName = req.body.lastName }
      if (req.body.password) { updatedMessage.password = req.body.password }
      return updatedMessage.save()
    })
    .then((user) => { res.status(200).json(user) })
    .catch((err) => { res.status(400).json({ error: true, message: err.toString() }) })
}

export const getMessage = (req, res) => {
  Messages
    .findOne({ _id: req.params.userId })
    .then((data) => { res.status(200).json(data) })
    .catch((err) => { res.status(400).json({ error: true, message: err.toString() }) })
}

export const postMessage = (req, res) => {
  const newMessage = new Messages(req.body)

  newMessage.content = req.body.content

  newMessage
    .save()
    .then((data) => { res.status(201).json(data) })
    .catch((err) => { res.status(400).json({ error: true, message: err.toString() }) })
}
