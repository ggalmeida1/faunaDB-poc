const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.Client({
  secret: ''
})

const createContact = data => {
  return client.query(q.Create(q.Collection('contacts'), { data }))
}

const getContactByRef = ref => {
  return client.query(q.Get(q.Ref(q.Collection('contacts'), ref)))
}

const getAllContacts = () => {
  return client.query(
    q.Map(
      q.Paginate(
        q.Match('allContacts'),
        { size: 2 }
      ),
      q.Lambda(x => q.Get(x))
    )
  )
}

const getContactByEmail = email => {
  return client.query(
    q.Get(
      q.Match(q.Index('contactByEmail'), [email])
    )
  )
}

/*
getContactByEmail('contato@devpleno.com').then((contato) => {
  console.log(contato)
})

/*
getAllContacts().then((all) => {
  console.log(all)
})

/*
getContactByRef('295955618507784707')
  .then(ret => {
    console.log('get', ret)
  })
*/

/*
createContact({
  name: 'João',
  email: 'joao@joao.com',
  title: 'joao'
}).then(ret => {
  console.log(ret)
})
*/