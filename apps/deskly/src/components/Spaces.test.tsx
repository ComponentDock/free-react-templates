import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Spaces } from './Spaces'

describe('Spaces', () => {
  it('renders the section heading and four workspace cards', () => {
    render(<Spaces />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Find Your Perfect Workspace' }),
    ).toBeInTheDocument()

    for (const space of ['Hot Desk', 'Dedicated Desk', 'Private Office', 'Meeting Rooms']) {
      expect(screen.getByRole('heading', { level: 3, name: space })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Reserve' })).toHaveLength(4)
  })

  it('shows placeholder imagery per space', () => {
    render(<Spaces />)

    expect(screen.getAllByRole('img')).toHaveLength(4)
    expect(screen.getByRole('img', { name: 'Hot Desk at Deskly' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/deskly-hotdesk'),
    )
  })
})
