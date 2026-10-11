import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the photographic hero with the oversized headline', () => {
    render(<Hero />)

    const section = document.getElementById('home')!
    expect(section).not.toBeNull()
    expect(section.className).toContain('min-h-[700px]')
    expect(section.getAttribute('style')).toContain('picsum.photos/seed/wanderport-hero')

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Wherever you go/)
    expect(heading.textContent).toMatch(/inside the World/)
    expect(heading.className).toContain('text-white')

    expect(screen.getByText(/Flights, hotels and the days in between/)).toBeInTheDocument()
  })

  it('carries the gradient pill call to action with the sliding arrow', () => {
    render(<Hero />)

    const cta = screen.getByRole('link', { name: /See Details/ })
    expect(cta).toHaveAttribute('href', '#booking')
    expect(cta.className).toContain('brand-gradient')
    expect(cta.className).toContain('rounded-[25px]')

    const arrow = cta.querySelector('svg')!
    expect(arrow.className.baseVal).toContain('group-hover:right-[20px]')
  })
})
