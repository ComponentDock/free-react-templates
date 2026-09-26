import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the Testimonials heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
  })

  it('displays the first testimonial quote by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/delivered an exceptional brand identity/)).toBeInTheDocument()
  })

  it('displays the first testimonial author', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechStart')).toBeInTheDocument()
  })

  it('renders navigation dots', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /Show testimonial/ })
    expect(dots).toHaveLength(3)
  })

  it('switches to the second testimonial when clicking the second dot', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /Show testimonial/ })
    await user.click(dots[1]!)
    expect(screen.getByText(/game-changer for our digital presence/)).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })

  it('switches to the third testimonial when clicking the third dot', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /Show testimonial/ })
    await user.click(dots[2]!)
    expect(screen.getByText(/3D visualizations/)).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })
})
