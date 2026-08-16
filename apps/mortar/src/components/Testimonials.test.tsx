import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the kicker and heading', () => {
    render(<Testimonials />)
    expect(screen.getByText(testimonials.kicker)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: testimonials.heading }),
    ).toBeInTheDocument()
  })

  it('shows the first quote with name and role', () => {
    render(<Testimonials />)
    const first = testimonials.slides[0]
    expect(screen.getByText(first.quote)).toBeInTheDocument()
    expect(screen.getByText(first.name)).toBeInTheDocument()
    expect(screen.getByText(testimonials.role)).toBeInTheDocument()
  })

  it('advances to the next slide with the next control', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const second = testimonials.slides[1]
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(second.quote)).toBeInTheDocument()
  })

  it('wraps back to the first slide after the last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const first = testimonials.slides[0]
    for (let i = 0; i < testimonials.slides.length; i += 1) {
      await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    }
    expect(screen.getByText(first.quote)).toBeInTheDocument()
  })

  it('moves to the previous slide with the previous control', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const last = testimonials.slides[testimonials.slides.length - 1]!
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(last.quote)).toBeInTheDocument()
  })
})
