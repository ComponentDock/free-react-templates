import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Satisfied Clients/i)
  })

  it('displays a testimonial quote', () => {
    render(<Testimonials />)

    expect(screen.getByText(/far far away/i)).toBeInTheDocument()
  })

  it('shows the client name and role', () => {
    render(<Testimonials />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('CEO, Founder')).toBeInTheDocument()
  })

  it('has prev and next navigation buttons', () => {
    render(<Testimonials />)

    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('navigates to the next testimonial on Next click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
  })

  it('navigates to the previous testimonial on Previous click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Start at index 0, click Previous to wrap to last
    expect(screen.getByText('John Doe')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /previous/i }))
    expect(screen.getByText('Bob Johnson')).toBeInTheDocument()
  })

  it('wraps from last to first on Next click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Navigate to last: next twice (0->1->2)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Bob Johnson')).toBeInTheDocument()

    // Click next again to wrap to first
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('wraps from first to last on Previous click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Start at index 0, click Previous to wrap to last
    expect(screen.getByText('John Doe')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /previous/i }))
    expect(screen.getByText('Bob Johnson')).toBeInTheDocument()
  })
})
