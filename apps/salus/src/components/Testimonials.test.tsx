import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the first testimonial with quote and author', () => {
    render(<Testimonials />)

    expect(screen.getByText(testimonials[0].author)).toBeInTheDocument()
    expect(screen.getByText(/Donec imperdiet/)).toBeInTheDocument()
  })

  it('advances with the next arrow and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(testimonials[1].author)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(testimonials[0].author)).toBeInTheDocument()
  })

  it('goes back with the previous arrow and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    const last = testimonials[testimonials.length - 1] ?? testimonials[0]
    expect(screen.getByText(last.author)).toBeInTheDocument()
  })
})
