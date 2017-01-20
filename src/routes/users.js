/**
 * @flow
 */
 import { router } from '../app'

 router.route('/users')
  .get((req, res) => { res.json({ route: 'users' }) })

 export default router
