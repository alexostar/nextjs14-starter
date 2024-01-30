'use client'

import CreateMynote from '@/lib/actions/mynotenew2'

export default function CreateMynoteForm() {
  return (
    <form action={CreateMynote}>
      <input type='text' name='name' />
      <input type='text' name='details' />
      <input type='text' name='category' />
      <button type='submit'>Create note</button>
    </form>
  )
}
