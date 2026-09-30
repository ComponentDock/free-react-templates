export interface RowEntry {
  id: string
  firstName: string
  lastName: string
  email: string
}

/** Demo roster dataset (5 rows) for the sample table. */
export const initialRows: RowEntry[] = [
  {
    id: '001',
    firstName: 'Mark',
    lastName: 'Otto',
    email: 'markotto@email.com',
  },
  {
    id: '002',
    firstName: 'Jacob',
    lastName: 'Thornton',
    email: 'jacobthornton@email.com',
  },
  {
    id: '003',
    firstName: 'Larry',
    lastName: 'the Bird',
    email: 'larrybird@email.com',
  },
  { id: '004', firstName: 'John', lastName: 'Doe', email: 'johndoe@email.com' },
  { id: '005', firstName: 'Gary', lastName: 'Bird', email: 'garybird@email.com' },
]
