/**
 * @flow
 */
import Message from '../schemas/messages'

export const getMessages = (req, res) => {
  Message.find().then((data) => {
    res.status(200).json(data)
  }).catch((err) => {
    res.status(400).json({ error: true, message: err.toString() })
  })
}

export const getMessage = (req, res) => {
  Message.findOne({ _id: req.params.userId }).then((data) => {
    res.status(200).json(data)
  }).catch((err) => {
    res.status(400).json({ error: true, message: err.toString() })
  })
}

export const postMessage = (req, res) => {
  const newMessage = new Message(req.body)

  newMessage.save().then((data) => {
    res.status(201).json(data)
  }).catch((err) => {
    res.status(400).json({ error: true, message: err.toString() })
  })
}
