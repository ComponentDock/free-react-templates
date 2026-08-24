import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Our Portfolio/i)
  })

  it('displays portfolio project items', () => {
    render(<Portfolio />)

    const headings = screen.getAllByRole('heading', { level: 3 })
    const projectHeadings = headings.filter((h) =>
      h.textContent?.includes('High Quality Design Concept'),
    )
    expect(projectHeadings.length).toBe(6)
  })

  it('includes links on portfolio items', () => {
    render(<Portfolio />)

    const links = screen.getAllByRole('link')
    const projectLinks = links.filter((l) => l.textContent?.includes('High Quality Design Concept'))
    expect(projectLinks.length).toBe(6)
  })
})
