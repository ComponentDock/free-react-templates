import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Happy Guests')
  })

  it('displays first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText(/Absolutely stunning hotel/)).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()
  })

  it('wraps from last to first testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('wraps from first to last via next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()
  })

  it('cycles through all testimonials via next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // 0 → 1 → 2 → 0 (wrap)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('John Smith')).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<Testimonials />)
    const stars = document.querySelectorAll('.fill-brand')
    expect(stars.length).toBeGreaterThanOrEqual(5)
  })
})
