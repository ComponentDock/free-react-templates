import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Student Says About Us' }),
    ).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS[0]!.name)).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS[0]!.position)).toBeInTheDocument()
  })

  it('shows the testimonial selected via the navigation dots', () => {
    render(<Testimonials />)
    const secondDot = screen.getByRole('button', {
      name: `Show testimonial from ${TESTIMONIALS[1]!.name}`,
    })
    expect(secondDot).not.toHaveAttribute('aria-current')
    fireEvent.click(secondDot)
    expect(screen.getByText(TESTIMONIALS[1]!.name)).toBeInTheDocument()
    expect(secondDot).toHaveAttribute('aria-current', 'true')
    expect(
      screen.getByRole('button', { name: `Show testimonial from ${TESTIMONIALS[0]!.name}` }),
    ).not.toHaveAttribute('aria-current')
  })
})
