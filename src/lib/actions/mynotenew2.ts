'use server'

export default async function CreateMynote(formData: any) {
  const name = formData.get('name')
  const details = formData.get('details')
  const category = formData.get('category')

  // Set username and password
  const username = 'IceSwede'
  const password = 'YMLj 0Exx 3YNo oYj2 mGtA ogSO'
  // Encode username and password in base64
  const encoded = Buffer.from(username + ':' + password).toString('base64')

  const url = 'https://wpheadless.nextpress.se/graphql'
  const headers = {
    'content-type': 'application/json',
    Authorization: 'Basic ' + encoded
  }

  const CREATE_MYNOTE = `
  mutation createMynote(
    $name: String!
    $details: String!
    $category: String!

  ) {
    createMynote(
      input: {
        name: $name
        details: $details
        category: $category
        sortingOrder: 9
        publish: true
        status: PUBLISH
      }
    ) {
      mynote {
        databaseId
        id
        title
      }
    }
  }
`
  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query: CREATE_MYNOTE,
      variables: {
        name: name,
        details: details,
        category: category,
        sortingOrder: 9,
        publish: true
      }
    })
  }

  const fetchAPI = async () => {
    try {
      const result = await fetch(url, options)
      const data = await result.json()
      console.info(data)
    } catch (err) {
      console.info(err)
    }
  }
  await fetchAPI()
}
