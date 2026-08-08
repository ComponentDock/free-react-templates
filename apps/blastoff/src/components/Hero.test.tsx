import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the badge, headline and blurb', () => {
    render(<Hero />)

    expect(screen.getByText('Now in Beta — 2,000+ on the waitlist')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Ship products/)
    expect(heading.textContent).toContain('10x faster')

    expect(
      screen.getByText(/The modern development platform that helps startups/),
    ).toBeInTheDocument()
  })

  it('shows the two call-to-action buttons', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: /Join the Waitlist/ })).toHaveAttribute(
      'href',
      '#waitlist',
    )
    expect(screen.getByRole('link', { name: /See it in action/ })).toHaveAttribute(
      'href',
      '#how-it-works',
    )
  })

  it('shows the four hero stats', () => {
    render(<Hero />)

    expect(screen.getByText('2,000+')).toBeInTheDocument()
    expect(screen.getByText('Beta Users')).toBeInTheDocument()
    expect(screen.getByText('99.9%')).toBeInTheDocument()
    expect(screen.getByText('Uptime')).toBeInTheDocument()
    expect(screen.getByText('$2.5M')).toBeInTheDocument()
    expect(screen.getByText('Raised')).toBeInTheDocument()
    expect(screen.getByText('4.9')).toBeInTheDocument()
    expect(screen.getByText('Rating')).toBeInTheDocument()
  })

  it('renders the dashboard mockup image', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: /dashboard analytics mockup/ })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/blastoff-1'))
  })
})
