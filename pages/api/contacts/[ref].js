import { deleteContact } from '../../../services/contacts'

export default async function handler(req, res) {
  // console.log(req.query.ref)
  if (req.method === 'DELETE') {
    await deleteContact(req.query.ref)
    res.json({ ok: true })
  }
}