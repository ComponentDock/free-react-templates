import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Our Clients Say')).toBeInTheDocument()
  })

  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Racky Henderson')).toBeInTheDocument()
    expect(screen.getByText('Father')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Henry Dee')).toBeInTheDocument()
  })

  it('wraps around from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /go to testimonial 5/i }))
    expect(screen.getByText('Ken Bosh')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Racky Henderson')).toBeInTheDocument()
  })

  it('navigates to previous from first (wraps to last)', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Ken Bosh')).toBeInTheDocument()
  })

  it('navigates backward from middle', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to testimonial 3 first
    await user.click(screen.getByRole('button', { name: /go to testimonial 3/i }))
    expect(screen.getByText('Mark Huff')).toBeInTheDocument()
    // Click previous — should go to testimonial 2 (non-wrap branch)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Henry Dee')).toBeInTheDocument()
  })

  it('renders dot indicators', () => {
    render(<Testimonials />)
    const dots = screen.getAllByLabelText(/go to testimonial/i)
    expect(dots).toHaveLength(5)
  })

  it('navigates to specific testimonial via dot click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /go to testimonial 3/i }))
    expect(screen.getByText('Mark Huff')).toBeInTheDocument()
  })
})
