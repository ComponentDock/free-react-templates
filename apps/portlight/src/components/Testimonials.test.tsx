import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /happy customer/i })).toBeInTheDocument()
  })

  it('renders first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/gerald hodson/i)).toBeInTheDocument()
    expect(screen.getByText(/businessman/i)).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/karen spencer/i)).toBeInTheDocument()
  })

  it('navigates to previous testimonial from middle', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to index 1
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/karen spencer/i)).toBeInTheDocument()
    // Go back to index 0 (non-wrap case)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText(/gerald hodson/i)).toBeInTheDocument()
  })

  it('wraps next from last to first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Navigate to last testimonial (index 2)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/michael torres/i)).toBeInTheDocument()
    // Click next again — should wrap to first (index 0)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/gerald hodson/i)).toBeInTheDocument()
  })

  it('wraps prev from first to last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Already at first (index 0), click prev — should wrap to last (index 2)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText(/michael torres/i)).toBeInTheDocument()
  })
})
