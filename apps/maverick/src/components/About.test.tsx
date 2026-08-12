import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, blurb and personal-info list', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: 'About Me' })).toBeInTheDocument()
    expect(screen.getByText(/small river named Duden/)).toBeInTheDocument()
    for (const [label, value] of [
      ['Name', 'Alex Maverick'],
      ['Date of birth', 'January 01, 1987'],
      ['Address', 'San Francisco CA 97987 USA'],
      ['Zip code', '1000'],
      ['Email', 'maverick.design@gmail.com'],
      ['Phone', '+1-2234-5678-9-0'],
    ] as const) {
      expect(screen.getByText(new RegExp(`^${label}:$`))).toBeInTheDocument()
      expect(screen.getByText(value)).toBeInTheDocument()
    }
  })

  it('renders the amber counter and Download CV button', () => {
    render(<About />)
    expect(screen.getByText('120')).toBeInTheDocument()
    expect(screen.getByText('Project complete')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download CV' })).toHaveAttribute(
      'href',
      '#contact-section',
    )
  })

  it('renders the portrait with alt text', () => {
    render(<About />)
    expect(screen.getByAltText('Portrait of Alex Maverick')).toBeInTheDocument()
  })
})
