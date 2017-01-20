/**
 * @flow
 */
 import { router } from '../app'

 router.route('/channels')
  .get((req, res) => { res.json({ routes: 'channels' }) })

 export default router
