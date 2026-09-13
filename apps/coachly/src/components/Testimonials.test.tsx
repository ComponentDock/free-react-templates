import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials, getTestimonial } from './Testimonials'

describe('Testimonials', () => {
  it('renders initial testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText(/Sarah Johnson/)).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/Michael Chen/)).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText(/Emma Williams/)).toBeInTheDocument()
  })

  it('navigates backward from non-zero index', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText(/Sarah Johnson/)).toBeInTheDocument()
  })

  it('wraps around from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/Sarah Johnson/)).toBeInTheDocument()
  })
})

describe('getTestimonial', () => {
  it('returns testimonial at valid index', () => {
    expect(getTestimonial(0).name).toBe('Sarah Johnson')
    expect(getTestimonial(1).name).toBe('Michael Chen')
  })

  it('falls back to first testimonial for invalid index', () => {
    expect(getTestimonial(99).name).toBe('Sarah Johnson')
  })
})
