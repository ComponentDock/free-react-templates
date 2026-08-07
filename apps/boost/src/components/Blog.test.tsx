import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three post cards with reading links', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'News & Updates' })).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { name: 'Best For Web Startups and Web Apps' }),
    ).toHaveLength(3)
    expect(screen.getByText('Ham Brook')).toBeInTheDocument()
    expect(screen.getAllByText('James Phelps').length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /Continue Reading/ })).toHaveLength(3)
  })
})
