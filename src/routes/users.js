/**
 * @flow
 */
 import { router } from '../app'
 import { postUser } from '../controllers/users'

 router.route('/users')
   .get((req, res) => { res.json({ route: 'users' }) })
   .post((req, res) => postUser(req, res))

 export default router
