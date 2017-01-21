/**
 * @flow
 */
 import { router } from '../app'
 import { postChannel, getChannels, getChannel } from '../controllers/channels'

 router.route('/channels')
  .get((req, res) => getChannels(req, res))
  .post((req, res) => postChannel(req, res))

 router.route('/channels/:channelId')
   .get((req, res) => getChannel(req, res))
   .post((req, res) => postChannel(req, res))

 export default router
