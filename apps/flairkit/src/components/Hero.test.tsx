import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the 80vh photo band with no color wash', () => {
    const { container } = render(<Hero />)

    const section = container.querySelector('section')

    expect(section?.className).toContain('h-[80vh]')
    expect(section?.style.backgroundImage).toContain('picsum.photos/seed/flairkit-hero')
    expect(container.querySelectorAll('[class*="gradient"], [class*="bg-black"]')).toHaveLength(0)
  })

  it('shows the bold white headline, subtitle and brand CTA', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading.textContent).toBe('Flairkit UI Kit')
    expect(heading.className).toContain('font-bold')
    expect(heading.className).toContain('text-white')
    expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'View All Here' })

    expect(cta).toHaveAttribute('href', '#start')
    expect(cta.className).toContain('bg-flair-primary')
    expect(cta.className).toContain('px-4')
    expect(cta.className).toContain('py-3')
  })
})
