const faunadb = require('faunadb')
export const q = faunadb.query

export const client = new faunadb.Client({
  secret: 'fnAEN-oF0xACQ_Dx3tZJO-M6etTymJFhNQKlLlp'
})