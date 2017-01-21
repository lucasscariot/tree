/**
 * @flow
 */
import { router } from '../app'
import { getMessages, getMessage, postMessage } from '../controllers/messages'

router.route('/messages')
  .get((req, res) => getMessages(req, res))
  .post((req, res) => postMessage(req, res))

router.route('/messages/:messageId')
. get((req, res) => getMessage(req, res))

export default router
