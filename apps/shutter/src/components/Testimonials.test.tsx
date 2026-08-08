import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, an initial quote, and carousel controls', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Kind Words' })).toBeInTheDocument()
    expect(screen.getByText(/Sarah & James Mitchell/)).toBeInTheDocument()
    expect(screen.getByText('Wedding, Tuscany')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /^Go to testimonial \d+$/ })).toHaveLength(6)
  })

  it('moves to the adjacent slide with next and previous controls', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/Olivia Chen/)).toBeInTheDocument()
    expect(screen.getByText('Creative Director, Lumiere Beauty')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/Sarah & James Mitchell/)).toBeInTheDocument()
  })

  it('wraps around at both ends of the carousel', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/Mark & Julie/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/Sarah & James Mitchell/)).toBeInTheDocument()
  })

  it('jumps to a slide via the dot pagination and marks it current', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByText(/Marcus Rivera/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to testimonial 1' })).not.toHaveAttribute(
      'aria-current',
    )
  })
})
