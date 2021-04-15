import { createContact, getAllContacts } from '../../../services/contacts'

export default async function handler(req, res) {
  // console.log(req)
  if (req.method === 'POST') {
    const contact = await createContact(req.body)
    res.send(contact)
  } else {
    const contacts = await getAllContacts()
    res.json(contacts)
  }
}