import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, yellow highlight, subtext and navy CTA over the illustration', () => {
    const { container } = render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('Lifelong memories just a few seconds away')
    expect(heading).toHaveClass('text-navy')

    const highlight = heading.querySelector('span[aria-hidden="true"]')
    expect(highlight).toHaveClass('bg-brand')

    expect(
      screen.getByText('Let’s start your journey with us, your dream will come true'),
    ).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'Explore Destinations' })
    expect(cta).toHaveAttribute('href', '#events')
    expect(cta).toHaveClass('gradient-navy')

    expect(container.querySelector('[data-testid="beach-scene"]')).not.toBeNull()
    expect(container.querySelector('#home')).not.toBeNull()
  })
})
