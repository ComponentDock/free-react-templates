import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('What Our Guests Say')).toBeInTheDocument()
  })

  it('renders the Testimonials subheading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText(/Absolutely stunning hotel/)).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const nextButtons = screen.getAllByRole('button', { name: /next testimonial/i })
    await user.click(nextButtons[0]!)
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
    expect(screen.getByText(/family had the most wonderful holiday/)).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Move to testimonial 2 first, then go previous
    const nextButtons = screen.getAllByRole('button', { name: /next testimonial/i })
    await user.click(nextButtons[0]!)
    const prevButtons = screen.getAllByRole('button', { name: /previous testimonial/i })
    await user.click(prevButtons[0]!)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dotButton = screen.getByRole('button', { name: /go to testimonial 3/i })
    await user.click(dotButton)
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()
  })

  it('renders all testimonial dots', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    expect(dots).toHaveLength(4)
  })

  it('wraps around from last to first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dot4 = screen.getByRole('button', { name: /go to testimonial 4/i })
    await user.click(dot4)
    const nextButtons = screen.getAllByRole('button', { name: /next testimonial/i })
    await user.click(nextButtons[0]!)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
  })

  it('wraps around from first to last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const prevButtons = screen.getAllByRole('button', { name: /previous testimonial/i })
    await user.click(prevButtons[0]!)
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('renders testimonial title', () => {
    render(<Testimonials />)
    expect(screen.getByText('Business Traveler')).toBeInTheDocument()
  })

  it('renders testimonial image', () => {
    render(<Testimonials />)
    const img = screen.getByAltText('John Smith')
    expect(img).toBeInTheDocument()
  })
})
