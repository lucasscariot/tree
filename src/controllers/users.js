z/**
 * @flow
 */
import crypto from 'crypto-js/sha256'
import Users from '../schemas/users'
import config from '../config'

const { TREE_NAMES } = config

export const getUsers = (req, res) => {
  Users
    .find()
    .then((data) => { res.status(200).json(data) })
    .catch((err) => { res.status(400).json({ error: true, message: err.toString() }) })
}

export const getUser = (req, res) => {
  Users
    .findOne({ _id: req.params.userId })
    .then((data) => { res.status(200).json(data) })
    .catch((err) => { res.status(400).json({ error: true, message: err.toString() }) })
}

export const putUser = (req, res) => {
  Users
    .findOne({ _id: req.params.userId }).exec()
    .then((user) => {
      const updatedUser = user
      if (req.body.firstName) { updatedUser.firstName = req.body.firstName }
      if (req.body.lastName) { updatedUser.lastName = req.body.lastName }
      if (req.body.password) { updatedUser.password = crypto(req.body.password) }
      return updatedUser.save()
    })
    .then((user) => { res.status(200).json(user) })
    .catch((err) => { res.status(400).json({ error: true, message: err.toString() }) })
}

export const postUser = (req, res) => {
  if (!req.body.firstName || !req.body.lastName ||
      !req.body.email || !req.body.password) {
    res.status(400).json({ error: true, message: 'Missing parameters' })
  }
  const newUser = new Users()
  newUser.firstName = req.body.firstName
  newUser.lastName = req.body.lastName
  newUser.treeName = TREE_NAMES[Math.floor(Math.random() * TREE_NAMES.length)] + Math.floor(Math.random() * 99)
  newUser.email = req.body.email
  newUser.password = crypto(req.body.password)

  newUser
    .save()
    .then((data) => { res.status(201).json(data) })
    .catch((err) => { res.status(400).json({ error: true, message: err.toString() }) })
}

export const delUser = (req, res) => {
  Users
    .remove({ _id: req.params.userId })
    .then(() => { res.status(200).json({ message: 'User deleted' }) })
    .catch((err) => { res.status(400).json({ error: true, message: err.toString() }) })
}
