import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from '../components/Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
  })

  it('renders testimonial quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Far far away, behind the word/)).toBeInTheDocument()
  })

  it('renders customer name', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('renders customer title', () => {
    render(<Testimonials />)
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
  })

  it('renders avatar image', () => {
    render(<Testimonials />)
    expect(screen.getByRole('img', { name: 'Customer avatar' })).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    const { container } = render(<Testimonials />)
    // 5 star icons
    const stars = container.querySelectorAll('svg')
    expect(stars.length).toBeGreaterThanOrEqual(5)
  })
})
