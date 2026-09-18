import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { MostVisited } from './MostVisited'

describe('MostVisited', () => {
  it('renders the section heading', () => {
    render(<MostVisited />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Most Visited Places' }),
    ).toBeInTheDocument()
  })

  it('renders 6 listing cards', () => {
    render(<MostVisited />)
    const bookmarks = screen.getAllByRole('button', {
      name: new RegExp('Bookmark'),
    })
    expect(bookmarks).toHaveLength(6)
  })

  it('displays listing names', () => {
    render(<MostVisited />)
    expect(screen.getByText('Luxe Hotel')).toBeInTheDocument()
    expect(screen.getByText('Grill & Dining')).toBeInTheDocument()
  })

  it('displays listing addresses', () => {
    render(<MostVisited />)
    expect(screen.getAllByText('West Orange, New York')[0]).toBeInTheDocument()
  })

  it('displays category badges', () => {
    render(<MostVisited />)
    expect(screen.getByText('Hotels')).toBeInTheDocument()
    expect(screen.getByText('Restaurants')).toBeInTheDocument()
  })

  it('has bookmark buttons with aria-labels', async () => {
    const user = userEvent.setup()
    render(<MostVisited />)
    const btn = screen.getByLabelText('Bookmark Luxe Hotel')
    await user.click(btn)
    expect(btn).toBeInTheDocument()
  })
})
