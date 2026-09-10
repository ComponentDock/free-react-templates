import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/automated process starts/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Business Owner')).toBeInTheDocument()
  })

  it('switches to second testimonial on dot click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const dot = screen.getByRole('button', { name: /go to testimonial 2/i })
    await user.click(dot)

    expect(screen.getByText(/Outstanding attention/)).toBeInTheDocument()
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
  })

  it('renders dot navigation indicators', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    expect(dots).toHaveLength(2)
  })

  it('first dot is active by default', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    expect(dots[0]!.className).toContain('bg-brand')
    expect(dots[1]!.className).toContain('bg-white/30')
  })
})
