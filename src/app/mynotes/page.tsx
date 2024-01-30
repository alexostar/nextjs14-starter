import axios from 'axios'
import Link from 'next/link'
import { GET_ALL_MYNOTES } from '@/lib/mynotes/Queries'

export default async function MynotesList() {
  const endpoint = 'https://wpheadless.nextpress.se/graphql'
  const headers = {
    'content-type': 'application/json'
  }
  const graphqlQuery = {
    query: GET_ALL_MYNOTES,
    variables: {}
  }

  const response = await axios({
    url: endpoint,
    method: 'post',
    headers: headers,
    data: graphqlQuery
  })
  const mynotes =
    response.data?.data?.mynotes?.edges?.map(edge => edge.node) || []

  console.log(mynotes)
  // console.log(response.data) // data
  //console.log(response.errors); // errors if any

  return (
    <section className='py-24'>
      <div className='container'>
        <Link href='/' className='text-lg'>
          ← Back to Home
        </Link>
        <h2 className='my-4 text-2xl'> My notes</h2>
        <ul className='list-disc'>
          {mynotes.map(note => (
            <li key={note.id}>
              <Link href={`/mynotes/${note.id}`}>{note.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
