import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first testimonial quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/helped me so much/i)).toBeInTheDocument()
  })

  it('renders author name and role', () => {
    render(<Testimonials />)
    expect(screen.getByText('Emily Carter')).toBeInTheDocument()
    expect(screen.getByText('Student')).toBeInTheDocument()
  })

  it('renders navigation buttons', () => {
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: /Previous testimonial/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Next testimonial/i })).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
  })

  it('wraps from first to last when clicking Previous', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // On first (index 0), clicking Previous should wrap to last
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText('Sarah Thompson')).toBeInTheDocument()
  })

  it('wraps from last to first when clicking Next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to last
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    // Now on last (index 2), click Next to wrap to first
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText('Emily Carter')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /Go to testimonial 2/i }))
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
  })

  it('renders dot indicators', () => {
    const { container } = render(<Testimonials />)
    const dots = container.querySelectorAll('[aria-label^="Go to testimonial"]')
    expect(dots).toHaveLength(3)
  })
})
