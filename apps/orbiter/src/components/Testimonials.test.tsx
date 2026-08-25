import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
  })

  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechCorp')).toBeInTheDocument()
    expect(screen.getByText(/Working with this team/)).toBeInTheDocument()
  })

  it('renders the testimonial image', () => {
    render(<Testimonials />)
    const img = screen.getByAltText('Sarah Johnson')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('navigates to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Director, InnovateCo')).toBeInTheDocument()
  })

  it('navigates to the previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // First go to next so we are NOT at position 0
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    // Now prev should go back to Sarah Johnson (position 0 → position 0 - 1 wraps)
    // Actually prev from position 1 goes to position 0
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('wraps from first to last on previous', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // At position 0, click prev to wrap to last
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
    expect(screen.getByText('Founder, StartupHub')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /go to testimonial 3/i }))
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
    expect(screen.getByText('Marketing Lead, BrandX')).toBeInTheDocument()
  })

  it('renders four dot indicators', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    expect(dots).toHaveLength(4)
  })

  it('wraps around from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Navigate to last (James Wilson)
    await user.click(screen.getByRole('button', { name: /go to testimonial 4/i }))
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
    // Click next to wrap to first
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })
})
