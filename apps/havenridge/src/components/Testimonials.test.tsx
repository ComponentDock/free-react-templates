import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Clients We Help')).toBeInTheDocument()
  })

  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Robert Anderson')).toBeInTheDocument()
    expect(screen.getByText('Homeowner')).toBeInTheDocument()
    expect(screen.getByText(/Havenridge made the entire home buying process/i)).toBeInTheDocument()
  })

  it('navigates to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))

    expect(screen.getByText('Jennifer Martinez')).toBeInTheDocument()
    expect(screen.getByText('First-time Buyer')).toBeInTheDocument()
  })

  it('navigates to the previous testimonial from a non-zero index', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Go forward first so current is 1
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    // Now go back from index 1 to index 0
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))

    expect(screen.getByText('Robert Anderson')).toBeInTheDocument()
    expect(screen.getByText('Homeowner')).toBeInTheDocument()
  })

  it('wraps around from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Go to last testimonial first
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    // Then go next — should wrap to first
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))

    expect(screen.getByText('Robert Anderson')).toBeInTheDocument()
  })

  it('wraps around from first to last on previous', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // At index 0, click prev — should wrap to last (index 2)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))

    expect(screen.getByText('David Chen')).toBeInTheDocument()
    expect(screen.getByText('Property Investor')).toBeInTheDocument()
  })
})
