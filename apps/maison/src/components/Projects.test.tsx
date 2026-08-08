import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)
    expect(
      screen.getByRole('heading', { name: /Here are some of Our Latest Works/i }),
    ).toBeInTheDocument()
  })

  it('renders at least three project cards with images, titles, and view-details links', () => {
    render(<Projects />)
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByRole('link', { name: /View Details/i }).length).toBeGreaterThanOrEqual(3)
  })
})
