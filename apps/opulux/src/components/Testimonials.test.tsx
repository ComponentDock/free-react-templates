import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText(/absolutely wonderful/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Guest, Suite Room')).toBeInTheDocument()
  })

  it('navigates forward and backward', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Forward: 0 → 1
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    // Backward: 1 → 0
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('wraps around from last to first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Navigate to last (index 2)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
    // Click next from last → wraps to first
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('wraps around from first to last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // We start at index 0, click prev → wraps to last
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })
})
