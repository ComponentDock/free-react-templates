import { fireEvent, render, screen, within } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'
import { describe, expect, it } from 'vitest'

describe('Testimonials', () => {
  it('renders the heading and all quote cards', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Testimonials/ })).toBeInTheDocument()
    const names = screen.getAllByRole('heading', { level: 3, hidden: true })
    expect(names).toHaveLength(TESTIMONIALS.length)
  })

  it('shows the first testimonial and hides the rest', () => {
    render(<Testimonials />)
    const figures = document.querySelectorAll('figure')
    expect(figures).toHaveLength(TESTIMONIALS.length)
    expect(figures[0]).not.toHaveAttribute('aria-hidden')
    expect(figures[1]).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText(new RegExp(TESTIMONIALS[0]!.quote))).toBeInTheDocument()
  })

  it('advances and goes back one card, wrapping at the edges', () => {
    render(<Testimonials />)
    const next = screen.getByRole('button', { name: 'Next testimonial' })
    const prev = screen.getByRole('button', { name: 'Previous testimonial' })
    const figures = document.querySelectorAll('figure')

    fireEvent.click(next)
    expect(figures[1]).not.toHaveAttribute('aria-hidden')
    expect(figures[0]).toHaveAttribute('aria-hidden', 'true')

    for (let i = 0; i < TESTIMONIALS.length - 1; i++) fireEvent.click(next)
    // wrapped to the start
    expect(figures[0]).not.toHaveAttribute('aria-hidden')

    fireEvent.click(prev)
    // wrapped to the end
    expect(figures[TESTIMONIALS.length - 1]).not.toHaveAttribute('aria-hidden')
  })

  it('renders the visible card with quote icon, name, and role', () => {
    render(<Testimonials />)
    const figure = document.querySelector('figure')!
    expect(figure.querySelector('svg')).not.toBeNull()
    expect(within(figure).getByText(TESTIMONIALS[0]!.name)).toBeInTheDocument()
    expect(within(figure).getByText(TESTIMONIALS[0]!.role)).toBeInTheDocument()
  })
})
