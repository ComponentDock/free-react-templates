export interface PersonRow {
  id: number
  firstName: string
  lastName: string
  email: string
}

/** Canonical demo rows — row number, first name, last name, email. */
export const people: PersonRow[] = [
  { id: 1, firstName: 'Mark', lastName: 'Otto', email: 'markotto@email.com' },
  {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    email: 'jacobthornton@email.com',
  },
  { id: 3, firstName: 'Larry', lastName: 'the Bird', email: 'larrybird@email.com' },
  { id: 4, firstName: 'John', lastName: 'Doe', email: 'johndoe@email.com' },
  { id: 5, firstName: 'Gary', lastName: 'Bird', email: 'garybird@email.com' },
]
