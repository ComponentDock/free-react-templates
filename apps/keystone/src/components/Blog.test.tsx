import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'All Recent Articles From Us' }),
    ).toBeInTheDocument()
  })

  it('shows two article cards with Read More links', () => {
    render(<Blog />)

    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: /Read More/ })).toHaveLength(2)
  })
})
