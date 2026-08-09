import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the heading with a subtitle', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Latest From Blog' })).toBeInTheDocument()
    expect(screen.getByText(/grooming guides, style notes/i)).toBeInTheDocument()
  })

  it('shows four post cards with meta, title, and excerpt', () => {
    render(<Blog />)

    for (const title of [
      'Classic Haircuts That Never Go Out of Style',
      'Beard Grooming Tips for Every Season',
      'The Art of the Perfect Hot Towel Shave',
      'Five Products Every Gentleman Needs',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }

    expect(screen.getByText('13th Dec')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('04')).toBeInTheDocument()
    expect(screen.getByText(/from the pompadour to the side part/i)).toBeInTheDocument()
  })
})
