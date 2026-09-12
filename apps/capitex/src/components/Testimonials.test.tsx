import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Capitex made the loan process incredibly simple/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Small Business Owner')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText(/The team was professional and responsive/i)).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go forward first, then back to cover the non-zero branch
    await user.click(screen.getByLabelText('Next testimonial'))
    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('wraps from first to last on prev', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Already at index 0 — prev wraps to last
    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('navigates via dot buttons', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Go to testimonial 3'))
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('wraps around on next from last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Go to testimonial 3'))
    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })
})
