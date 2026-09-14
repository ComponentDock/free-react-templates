import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('What Clients Are Saying')
  })

  it('shows the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/innovative digital solutions/)).toBeInTheDocument()
    expect(screen.getByText(/Jean Smith/)).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/Carl Spencer/)).toBeInTheDocument()
  })

  it('navigates to previous testimonial from non-zero index', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText(/Jean Smith/)).toBeInTheDocument()
  })

  it('navigates to previous testimonial wrapping from first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText(/Ryan Peters/)).toBeInTheDocument()
  })

  it('wraps around from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/Jean Smith/)).toBeInTheDocument()
  })
})
