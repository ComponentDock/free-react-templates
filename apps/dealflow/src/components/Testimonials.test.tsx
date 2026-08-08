import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading and the first testimonial', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Trusted by Sales Leaders' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/transformed our sales process/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('VP of Sales, TechScale Inc.')).toBeInTheDocument()
  })

  it('cycles forward and backward through the quotes with round buttons', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const next = screen.getByRole('button', { name: 'Next testimonial' })
    const prev = screen.getByRole('button', { name: 'Previous testimonial' })

    await user.click(next)
    expect(screen.getByText(/AI lead scoring alone is worth the investment/i)).toBeInTheDocument()
    expect(screen.getByText('Marcus Johnson')).toBeInTheDocument()

    await user.click(prev)
    expect(screen.getByText(/transformed our sales process/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()

    // Wraps around: previous from the first quote shows the last one
    await user.click(prev)
    expect(
      screen.getByText(/analytics dashboards give us real-time visibility/i),
    ).toBeInTheDocument()
    expect(screen.getByText('James Mitchell')).toBeInTheDocument()
  })
})
