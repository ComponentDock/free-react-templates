import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText(/Spotlight made it incredibly easy/)).toBeInTheDocument()
  })

  it('shows pagination indicator', () => {
    render(<Testimonials />)
    expect(screen.getByText('1 / 4')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Christine Aguilar')).toBeInTheDocument()
    expect(screen.getByText('2 / 4')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to next first, then back
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('1 / 4')).toBeInTheDocument()
  })

  it('wraps around from last to first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go through all 4
    for (let i = 0; i < 4; i++) {
      await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    }
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('1 / 4')).toBeInTheDocument()
  })

  it('wraps around from first to last on previous', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Laura Bennett')).toBeInTheDocument()
    expect(screen.getByText('4 / 4')).toBeInTheDocument()
  })

  it('renders testimonial images with alt text', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('John Smith')).toBeInTheDocument()
  })
})
