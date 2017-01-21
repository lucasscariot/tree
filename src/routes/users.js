/**
 * @flow
 */
import { router } from '../app'
import { postUser, getUsers, getUser, delUser, putUser } from '../controllers/users'

router.route('/users')
 .get((req, res) => getUsers(req, res))
 .post((req, res) => postUser(req, res))

router.route('/users/:userId')
 .get((req, res) => getUser(req, res))
 .put((req, res) => putUser(req, res))
 .delete((req, res) => delUser(req, res))

export default router
