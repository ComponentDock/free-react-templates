import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
  })

  it('renders the first testimonial author', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('Christine Aguilar')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('Robert Spears')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Go to testimonial 3'))
    expect(screen.getByText('Robert Spears')).toBeInTheDocument()
  })

  it('wraps from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to last (3rd)
    await user.click(screen.getByLabelText('Go to testimonial 3'))
    expect(screen.getByText('Robert Spears')).toBeInTheDocument()
    // Click next — should wrap to first (1st)
    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('John Smith')).toBeInTheDocument()
  })

  it('wraps from first to last on previous', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Already at first, click prev — should wrap to last (3rd)
    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('Robert Spears')).toBeInTheDocument()
    // Click prev again — should go to second (2nd)
    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('Christine Aguilar')).toBeInTheDocument()
  })
})
