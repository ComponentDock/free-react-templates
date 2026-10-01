export type MemberStatus = 'active' | 'waiting'

export interface Member {
  id: string
  email: string
  added: string
  username: string
  status: MemberStatus
  checked: boolean
  avatarSeed: string
}

/** Demo member dataset (5 rows) for the sample status table. */
export const members: Member[] = [
  {
    id: '1',
    email: 'markotto@email.com',
    added: 'Added: 01/03/2020',
    username: 'Markotto89',
    status: 'active',
    checked: true,
    avatarSeed: 'statusline-1',
  },
  {
    id: '2',
    email: 'jacobthornton@email.com',
    added: 'Added: 01/03/2020',
    username: 'Jacobthornton',
    status: 'waiting',
    checked: false,
    avatarSeed: 'statusline-2',
  },
  {
    id: '3',
    email: 'larrybird@email.com',
    added: 'Added: 01/03/2020',
    username: 'Larry_bird',
    status: 'active',
    checked: false,
    avatarSeed: 'statusline-3',
  },
  {
    id: '4',
    email: 'johndoe@email.com',
    added: 'Added: 01/03/2020',
    username: 'Johndoe1990',
    status: 'active',
    checked: false,
    avatarSeed: 'statusline-4',
  },
  {
    id: '5',
    email: 'garybird@email.com',
    added: 'Added: 01/03/2020',
    username: 'Garybird_2020',
    status: 'waiting',
    checked: false,
    avatarSeed: 'statusline-5',
  },
]
