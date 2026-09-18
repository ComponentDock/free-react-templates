import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonials image', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Testimonials')).toBeInTheDocument()
  })

  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()
  })

  it('renders first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Excellent Service')).toBeInTheDocument()
    expect(screen.getByText(/The team at Roofmark/)).toBeInTheDocument()
    expect(screen.getByText('— Sarah Johnson')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const buttons = screen.getAllByRole('button')
    // The next button is the second one
    await user.click(buttons[1]!)
    expect(screen.getByText('Professional Team')).toBeInTheDocument()
    expect(screen.getByText(/From the first consultation/)).toBeInTheDocument()
    expect(screen.getByText('— Michael Chen')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const buttons = screen.getAllByRole('button')
    // From slide 0, prev goes to slide 2
    await user.click(buttons[0]!)
    expect(screen.getByText('Highly Recommended')).toBeInTheDocument()
    expect(screen.getByText(/Outstanding experience/)).toBeInTheDocument()
    expect(screen.getByText('— Emily Davis')).toBeInTheDocument()
  })

  it('cycles forward through all testimonials', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const buttons = screen.getAllByRole('button')
    const nextBtn = buttons[1]!
    await user.click(nextBtn)
    expect(screen.getByText('Professional Team')).toBeInTheDocument()
    await user.click(nextBtn)
    expect(screen.getByText('Highly Recommended')).toBeInTheDocument()
    await user.click(nextBtn)
    expect(screen.getByText('Excellent Service')).toBeInTheDocument()
  })
})
