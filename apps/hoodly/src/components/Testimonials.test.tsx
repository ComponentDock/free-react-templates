import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the first slide with avatar, quote, name, and position', () => {
    render(<Testimonials />)
    expect(screen.getByText(testimonials.slides[0].name)).toBeInTheDocument()
    expect(screen.getByText(testimonials.slides[0].position)).toBeInTheDocument()
    expect(
      screen.getByText(new RegExp(testimonials.slides[0].quote.slice(0, 20))),
    ).toBeInTheDocument()
  })

  it('advances and steps back through the slides', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(testimonials.slides[1].name)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(testimonials.slides[0].name)).toBeInTheDocument()
  })

  it('reflects the active slide in the dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots.length).toBe(3)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')

    await user.click(dots[2]!)
    expect(screen.getByText(testimonials.slides[2].name)).toBeInTheDocument()
    expect(dots[2]).toHaveAttribute('aria-current', 'true')
  })
})
