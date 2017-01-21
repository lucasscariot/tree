/**
 * @flow
 */
 import { router } from '../app'

 router.route('/channels')
  .get((req, res) => { res.json({ routes: 'channels' }) })

 router.route('/channels/:channelId')
   .get((req, res) => { res.json({ routes: 'channels', channel: req.params.channelId }) })


 export default router
