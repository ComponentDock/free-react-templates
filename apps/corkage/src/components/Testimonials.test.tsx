import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the testimonials heading and first quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/What Our Guests Say/i)).toBeInTheDocument()
    expect(screen.getByText(/absolute gem/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Food Blogger')).toBeInTheDocument()
  })

  it('navigates to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/Authentic Indian flavors/i)).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })

  it('navigates to the previous testimonial from middle', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to middle first
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    // Now go previous — covers false branch of prev
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('wraps from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to last
    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    // Next should wrap to first
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('wraps from first to last on previous', () => {
    render(<Testimonials />)
    // Use fireEvent for direct synchronous testing
    const prevBtn = screen.getByRole('button', { name: 'Previous testimonial' })
    fireEvent.click(prevBtn)
    // Should wrap to last
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })
})
