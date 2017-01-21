/**
 * @flow
 */
import crypto from 'crypto-js/sha256'
import User from '../schemas/users'

export const getUsers = (req, res) => {
  User.find().then((data) => {
    res.status(200).json(data)
  }).catch((err) => {
    res.status(400).json({ error: true, message: err.toString() })
  })
}

export const getUser = (req, res) => {
  User.findOne({ _id: req.params.userId }).then((data) => {
    res.status(200).json(data)
  }).catch((err) => {
    res.status(400).json({ error: true, message: err.toString() })
  })
}

export const postUser = (req, res) => {
  if (!req.body.firstName || !req.body.lastName ||
      !req.body.email || !req.body.password) {
    res.status(400).json({ error: true, message: 'Missing parameters' })
  }
  const newUser = new User()
  newUser.firstName = req.body.firstName
  newUser.lastName = req.body.lastName
  newUser.email = req.body.email
  newUser.password = crypto(req.body.password)

  newUser.save().then((data) => {
    res.status(201).json(data)
  }).catch((err) => {
    res.status(400).json({ error: true, message: err.toString() })
  })
}

export const delUser = (req, res) => {
  try {
    User.remove({ _id: req.params.userId }).then(() => {
      res.status(200).json({ message: 'User deleted' })
    }).catch((err) => {
      res.status(400).json({ error: true, message: err.toString() })
    })
  } catch (e) {
    res.status(400).json({ error: true, message: 'User inexistent' })
  }
}
