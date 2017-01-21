/**
 * @flow
 */
import { User } from '../schemas/user'

export const getUser = () => {
// const user = new User(req.body)
//
// user.save()
//   .then((data) => {
//     res.status(201).json(data)
//   })
//   .catch((err) => {
//     res.status(400).json({ error: true, message: err.toString() })
//   })
}


export const postUser = (req, res) => {
  const newUser = new User(req.body)

  newUser.save()
  .then((data) => {
    res.status(201).json(data)
  })
  .catch((err) => {
    res.status(400).json({ error: true, message: err.toString() })
  })
}
