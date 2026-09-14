import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial with a 5-star rating', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'What Our Customers Say' })).toBeInTheDocument()
    expect(screen.getByText(/electric bill dropped by 80%/i)).toBeInTheDocument()
    expect(screen.getByText('Marcus Webb')).toBeInTheDocument()
    expect(screen.getByText('Homeowner in Austin')).toBeInTheDocument()
    expect(screen.getByLabelText('5 out of 5 stars')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()
  })

  it('advances to the next testimonial and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    expect(screen.getByText(/electric bill dropped by 80%/i)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/installation crew was professional/i)).toBeInTheDocument()
    expect(screen.getByText('Dana Reyes')).toBeInTheDocument()
    // wrap: click next 5 more times to return to the first
    for (let i = 0; i < 5; i += 1) {
      await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    }
    expect(screen.getByText(/electric bill dropped by 80%/i)).toBeInTheDocument()
  })

  it('goes back to the previous testimonial with wrap-around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/battery backup has already paid/i)).toBeInTheDocument()
    expect(screen.getByText('Jordan Blake')).toBeInTheDocument()
  })

  it('jumps to a testimonial via the dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const thirdDot = screen.getByRole('button', { name: 'Show testimonial 3' })
    expect(thirdDot).toHaveAttribute('aria-current', 'false')
    await user.click(thirdDot)
    expect(thirdDot).toHaveAttribute('aria-current', 'true')
    expect(screen.getByText(/best financial decision/i)).toBeInTheDocument()
    expect(screen.getByText('Priya Natarajan')).toBeInTheDocument()
  })

  it('renders six dot indicators', () => {
    render(<Testimonials />)
    expect(screen.getAllByRole('button', { name: /show testimonial/i })).toHaveLength(6)
  })
})
