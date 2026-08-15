import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  nextTestimonialLabel,
  previousTestimonialLabel,
  testimonials,
  testimonialsSectionTitle,
} from '../data'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the first testimonial with quote, name, and position', () => {
    render(<Testimonials />)
    expect(screen.getByRole('region', { name: testimonialsSectionTitle })).toBeInTheDocument()
    expect(screen.getByText(testimonials[0].quote)).toBeInTheDocument()
    expect(screen.getByText(testimonials[0].name)).toBeInTheDocument()
    expect(screen.getByText(testimonials[0].position)).toBeInTheDocument()
    expect(screen.getByText(`1 / ${testimonials.length}`)).toBeInTheDocument()
  })

  it('moves to the next testimonial and wraps back to the first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: nextTestimonialLabel }))
    expect(screen.getByText(testimonials[1].quote)).toBeInTheDocument()
    expect(screen.getByText(`2 / ${testimonials.length}`)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: nextTestimonialLabel }))
    await user.click(screen.getByRole('button', { name: nextTestimonialLabel }))
    await user.click(screen.getByRole('button', { name: nextTestimonialLabel }))
    await user.click(screen.getByRole('button', { name: nextTestimonialLabel }))
    expect(screen.getByText(testimonials[0].quote)).toBeInTheDocument()
    expect(screen.getByText(`1 / ${testimonials.length}`)).toBeInTheDocument()
  })

  it('moves to the previous testimonial and wraps to the last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: previousTestimonialLabel }))
    expect(screen.getByText(testimonials[testimonials.length - 1]!.quote)).toBeInTheDocument()
    expect(screen.getByText(`${testimonials.length} / ${testimonials.length}`)).toBeInTheDocument()
  })
})
