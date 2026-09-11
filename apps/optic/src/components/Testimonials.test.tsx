import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /What Clients Are Saying/i })).toBeInTheDocument()
  })

  it('shows the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/exceptional photographer/)).toBeInTheDocument()
    expect(screen.getByText('— Graig Smith')).toBeInTheDocument()
  })

  it('cycles forward through all testimonials', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Next from index 0 → 1
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/fantastic experience/)).toBeInTheDocument()

    // Next from index 1 → 2
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/attention to detail/)).toBeInTheDocument()

    // Next from index 2 → 0 (wrap around)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/exceptional photographer/)).toBeInTheDocument()
  })

  it('cycles backward through all testimonials', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Prev from index 0 → 2 (wrap around)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText(/attention to detail/)).toBeInTheDocument()

    // Prev from index 2 → 1
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText(/fantastic experience/)).toBeInTheDocument()

    // Prev from index 1 → 0
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText(/exceptional photographer/)).toBeInTheDocument()
  })
})
