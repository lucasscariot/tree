/**
 * @flow
 */
import { router } from '../app'
import { postChannel, getChannels, getChannel, delChannel, putChannel } from '../controllers/channels'

router.route('/channels')
.get((req, res) => getChannels(req, res))
.post((req, res) => postChannel(req, res))

router.route('/channels/:channelId')
 .get((req, res) => getChannel(req, res))
 .put((req, res) => putChannel(req, res))
 .delete((req, res) => delChannel(req, res))

export default router
