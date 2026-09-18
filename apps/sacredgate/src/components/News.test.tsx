import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'

describe('News', () => {
  it('renders heading and blog post cards', () => {
    render(<News />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Latest News/i)
    for (const title of [
      'Community Outreach Program Launch',
      'Youth Conference 2026',
      'Annual Harvest Festival',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('shows Read More links for each post', () => {
    render(<News />)
    const links = screen.getAllByRole('link', { name: /Read More/i })
    expect(links.length).toBe(3)
  })
})
