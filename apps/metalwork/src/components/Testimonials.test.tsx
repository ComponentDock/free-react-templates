import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial card', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'Testimonial' })).toBeInTheDocument()
    expect(screen.getByText(testimonials[0]!.name)).toBeInTheDocument()
    expect(screen.getByText(`“${testimonials[0]!.quote}”`)).toBeInTheDocument()
  })

  it('cycles through the quotes with the next/prev arrows and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(testimonials[1]!.name)).toBeInTheDocument()
    expect(screen.getByText(`“${testimonials[1]!.quote}”`)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(testimonials[0]!.name)).toBeInTheDocument()

    // Wraps backward from the first quote to the last.
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(testimonials[testimonials.length - 1]!.name)).toBeInTheDocument()
  })
})
