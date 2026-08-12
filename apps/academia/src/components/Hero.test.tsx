import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the three-line headline, copy and teal CTA pill', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Learn your\s*Favorite Course\s*From Online/)

    expect(screen.getByText(/Learn from industry experts/)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'Browse Our Courses' })
    expect(cta).toHaveAttribute('href', '#courses')
    expect(cta.className).toMatch(/rounded-\[30px\]|rounded-full/)
    expect(cta.className).toMatch(/bg-brand/)
  })

  it('renders the flat education illustration composition', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('svg.lucide-laptop')).toBeInTheDocument()
    expect(container.querySelector('svg.lucide-graduation-cap')).toBeInTheDocument()
    expect(container.querySelector('svg.lucide-play')).toBeInTheDocument()
  })

  it('uses the purple gradient cover background', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section#home')
    expect(section?.className).toMatch(/bg-\[linear-gradient/)
  })
})
