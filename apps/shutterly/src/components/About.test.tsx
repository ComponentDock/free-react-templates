import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the three-column about section', () => {
    const { container } = render(<About />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'I Click Moment, that you love' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Every frame starts with a story/i)).toBeInTheDocument()

    // Signature graphic (decorative SVG)
    const signature = container.querySelector('svg[aria-hidden="true"]')
    expect(signature).toBeInTheDocument()

    // Center photo
    expect(screen.getByRole('img', { name: /photographer at work/i })).toHaveAttribute(
      'src',
      expect.stringContaining('shutterly-about'),
    )

    // Right column: experience counter + quote + outline button
    expect(screen.getByText('08')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByText(/gray cat slinks past/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'My Work' })).toHaveAttribute('href', '#portfolios')
  })
})
