import { router } from '../app'

router.route('/messages')
  .get((req, res) => { res.json({ routes: 'messages' }) })

export default router
