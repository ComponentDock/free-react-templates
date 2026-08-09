import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the eyebrow, serif heading, paragraphs, and Learn More button', () => {
    render(<About />)

    expect(screen.getByText('Who We Are')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Do Things That Matters. Plan. Create. Grow.',
      }),
    ).toBeInTheDocument()

    const paragraphs = screen.getAllByText(/Lorem ipsum dolor sit amet/)
    expect(paragraphs.length).toBeGreaterThanOrEqual(2)

    const learnMore = screen.getByRole('link', { name: 'Learn More' })
    expect(learnMore).toHaveAttribute('href', '#contact')
    expect(learnMore.className).toContain('border-2')
  })

  it('renders the main image with a dotted background detail and an overlapping image', () => {
    render(<About />)

    expect(screen.getByAltText('The Kraft studio at work')).toBeInTheDocument()
    expect(screen.getByAltText('A recent Kraft project')).toBeInTheDocument()
  })
})
