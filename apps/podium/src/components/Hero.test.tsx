import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the date badge, headline with gradient accent, and sub-paragraph', () => {
    render(<Hero />)
    expect(screen.getByText('March 15-17, 2032 • San Francisco, CA')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('The Premier Technology Conference')
    expect(heading.textContent).toContain('Technology')

    expect(screen.getByText(/Join 3,000\+ tech leaders/i)).toBeInTheDocument()
  })

  it('renders the countdown boxes with the four unit labels', () => {
    render(<Hero />)
    for (const label of ['Days', 'Hours', 'Minutes', 'Seconds']) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0)
    }
  })

  it('renders both CTAs', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /get your tickets/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view speakers/i })).toBeInTheDocument()
  })

  it('renders the four hero stats', () => {
    render(<Hero />)
    for (const [value, label] of [
      ['3,000+', 'Attendees'],
      ['50+', 'Speakers'],
      ['3', 'Days'],
      ['20+', 'Workshops'],
    ] as const) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getAllByText(label).length).toBeGreaterThan(0)
    }
  })

  it('renders the SCROLL indicator', () => {
    render(<Hero />)
    expect(screen.getByText('SCROLL')).toBeInTheDocument()
  })
})
