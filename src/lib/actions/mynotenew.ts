'use server'
import axios from 'axios'

import { CREATE_MYNOTE } from '../mynotes/mut-test'

export default async function CreateMynote(formData: any) {
  const name = formData.get('name')
  const details = formData.get('details')
  const category = formData.get('category')

  // Set username and password
  const username = 'IceSwede'
  const password = 'YMLj 0Exx 3YNo oYj2 mGtA ogSO'
  // Encode username and password in base64
  const encoded = Buffer.from(username + ':' + password).toString('base64')

  const endpoint = 'https://wpheadless.nextpress.se/graphql'
  const headers = {
    'content-type': 'application/json',
    Authorization: 'Basic ' + encoded
  }

    const graphqlMutation = {
      query: CREATE_MYNOTE,
      variables: name, details, category}
    }

  const response = axios.create({
    url: endpoint,
    method: 'post',
    headers: headers,
    data: graphqlMutation
  })

  console.log(response)
  return response
}
