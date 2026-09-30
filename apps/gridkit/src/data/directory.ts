export interface DirectoryEntry {
  id: string
  firstName: string
  lastName: string
  email: string
}

/** Demo directory dataset (4 columns × 5 rows) for the sample table. */
export const directory: DirectoryEntry[] = [
  { id: '1', firstName: 'Mark', lastName: 'Otto', email: 'markotto@email.com' },
  {
    id: '2',
    firstName: 'Jacob',
    lastName: 'Thornton',
    email: 'jacobthornton@email.com',
  },
  {
    id: '3',
    firstName: 'Larry',
    lastName: 'the Bird',
    email: 'larrybird@email.com',
  },
  { id: '4', firstName: 'John', lastName: 'Doe', email: 'johndoe@email.com' },
  { id: '5', firstName: 'Gary', lastName: 'Bird', email: 'garybird@email.com' },
]
