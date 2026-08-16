import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('renders the centered section heading with the caption and paragraphs', () => {
    render(<About />)
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings).toHaveLength(2)
    expect(headings[0]).toHaveTextContent(about.heading)
    expect(headings[1]).toHaveTextContent(about.captionTitle)
    for (const paragraph of about.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
  })

  it('shows the round cake photo', () => {
    const { container } = render(<About />)
    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', about.image)
    expect(img).toHaveAttribute('alt', about.imageAlt)
    expect(img?.className).toContain('rounded-full')
  })
})
