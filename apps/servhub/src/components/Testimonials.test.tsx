import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /What Clients Are Saying/i })).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText(/Jean Smith/)).toBeInTheDocument()
  })

  it('navigates to next and previous testimonials', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
    expect(screen.getByText(/Carl Spencer/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/Jean Smith/)).toBeInTheDocument()
  })

  it('wraps around on both ends', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Go to last
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/Ryan Peters/)).toBeInTheDocument()

    // Go to first again
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/Jean Smith/)).toBeInTheDocument()
  })
})
