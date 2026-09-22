import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText(/testimonials/i)).toBeInTheDocument()
  })

  it('displays testimonial content', () => {
    render(<Testimonials />)
    expect(screen.getByText(/great experience/i)).toBeInTheDocument()
  })

  it('shows author name', () => {
    render(<Testimonials />)
    expect(screen.getByText(/sarah johnson/i)).toBeInTheDocument()
  })

  it('has navigation arrows', () => {
    render(<Testimonials />)
    const prevBtn = screen.getByRole('button', { name: /previous/i })
    const nextBtn = screen.getByRole('button', { name: /next/i })
    expect(prevBtn).toBeInTheDocument()
    expect(nextBtn).toBeInTheDocument()
  })

  it('navigates to next testimonial', () => {
    render(<Testimonials />)
    const nextBtn = screen.getByRole('button', { name: /next/i })
    fireEvent.click(nextBtn)
    expect(screen.getByText(/michael davis/i)).toBeInTheDocument()
  })

  it('navigates to previous testimonial', () => {
    render(<Testimonials />)
    const prevBtn = screen.getByRole('button', { name: /previous/i })
    fireEvent.click(prevBtn)
    expect(screen.getByText(/james wilson/i)).toBeInTheDocument()
  })

  it('navigates via dot indicators', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    fireEvent.click(dots[2]!)
    expect(screen.getByText(/emily chen/i)).toBeInTheDocument()
  })
})
