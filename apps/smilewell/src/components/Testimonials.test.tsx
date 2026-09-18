import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimonial' })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Testimonials />)
    expect(screen.getByText('Happy Client Says')).toBeInTheDocument()
  })

  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Smilewell completely transformed/)).toBeInTheDocument()
    expect(screen.getByText('Ricky Fisher')).toBeInTheDocument()
  })

  it('navigates to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/nervous about dental work/)).toBeInTheDocument()
    expect(screen.getByText('Ken Davis')).toBeInTheDocument()
  })

  it('navigates to the previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Go to last one first (wrap around)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText(/From the initial consultation/)).toBeInTheDocument()
    expect(screen.getByText('Robert Steward')).toBeInTheDocument()
  })

  it('wraps from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Navigate to last
    for (let i = 0; i < 3; i++) {
      await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    }
    expect(screen.getByText(/From the initial consultation/)).toBeInTheDocument()

    // Wrap to first
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/Smilewell completely transformed/)).toBeInTheDocument()
  })
})
