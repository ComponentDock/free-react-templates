import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  it('shows the first testimonial with author and position', () => {
    render(<Testimonials />)
    const first = TESTIMONIALS[0]!
    expect(screen.getByRole('heading', { name: 'Happy Customers' })).toBeInTheDocument()
    expect(screen.getByText(`“${first.quote}”`)).toBeInTheDocument()
    expect(screen.getByText(first.author)).toBeInTheDocument()
    expect(screen.getByText(first.position)).toBeInTheDocument()
  })

  it('advances to the next testimonial and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const nextButton = screen.getByRole('button', { name: 'Next testimonial' })
    await user.click(nextButton)
    expect(screen.getByText(`“${TESTIMONIALS[1]!.quote}”`)).toBeInTheDocument()
    for (let i = 0; i < TESTIMONIALS.length - 1; i++) {
      await user.click(nextButton)
    }
    expect(screen.getByText(`“${TESTIMONIALS[0]!.quote}”`)).toBeInTheDocument()
  })

  it('goes to the previous testimonial and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    const last = TESTIMONIALS[TESTIMONIALS.length - 1]!
    expect(screen.getByText(`“${last.quote}”`)).toBeInTheDocument()
  })
})
