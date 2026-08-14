import { describe, expect, it } from 'vitest'
import { render, screen, within, fireEvent } from '@testing-library/react'
import { TESTIMONIALS } from '../data'
import { TestimonialsSection } from './TestimonialsSection'

describe('TestimonialsSection', () => {
  it('shows the heading and the first testimonial slide', () => {
    render(<TestimonialsSection />)
    expect(screen.getByText('Testimony')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Our satisfied customer says' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Garreth Smith')).toBeInTheDocument()
    expect(screen.getByText('CEO Founder of Commercial Building')).toBeInTheDocument()
    /* The quote is wrapped in curly quotes in the JSX, and the section
       blurb shares the same opening words — scope to the slide. */
    const article = screen.getByText('Garreth Smith').closest('article')!
    expect(within(article).getByText(new RegExp(TESTIMONIALS[0]!.quote))).toBeInTheDocument()
  })

  it('moves forward with the next arrow and wraps around', () => {
    render(<TestimonialsSection />)
    const next = screen.getByRole('button', { name: 'Next testimonial' })
    fireEvent.click(next)
    expect(screen.getByText('CEO Founder of Interior Design')).toBeInTheDocument()
    for (let i = 0; i < 4; i++) fireEvent.click(next)
    expect(screen.getByText('CEO Founder of Commercial Building')).toBeInTheDocument()
  })

  it('moves backward with the prev arrow and wraps around', () => {
    render(<TestimonialsSection />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('System Analyst')).toBeInTheDocument()
  })

  it('jumps to a slide via the dot indicators and marks it active', () => {
    render(<TestimonialsSection />)
    const dots = screen.getAllByRole('button', { name: /Go to testimonial/ })
    expect(dots).toHaveLength(5)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
    fireEvent.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByText('Exterior Designer')).toBeInTheDocument()
    expect(dots[2]).toHaveAttribute('aria-current', 'true')
    expect(dots[0]).not.toHaveAttribute('aria-current')
  })
})
