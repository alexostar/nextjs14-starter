import { gql } from '@apollo/client'

export const CREATE_MYNOTE = gql`
  mutation createMynote(
    $name: String!
    $details: String!
    $category: String!
    $sortingOrder: Float!
    $publish: Boolean!
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

export const UPDATE_MYNOTE = `
  mutation updateMynote(
    $id: ID!
    $name: String!
    $details: String!
    $category: String!
    $sortingOrder: Float!
    $publish: Boolean!
  ) {
    updateMynote(
      input: {
        id: $id
        name: $name
        details: $details
        category: $category
        sortingOrder: $sortingOrder
        publish: $publish
        status: PUBLISH
      }
    ) {
      clientMutationId
      mynote {
        databaseId
        id
        title
      }
    }
  }
`

export const DELETE_MYNOTE = `
  mutation deleteMynote($id: ID!) {
    deleteMynote(input: { id: $id }) {
      clientMutationId
      deletedId
    }
  }
`
