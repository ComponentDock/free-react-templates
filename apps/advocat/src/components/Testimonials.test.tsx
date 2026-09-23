import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and all five testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /happy clients/i })).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
    expect(screen.getByText('Emily Rogers')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Linda Park')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Business Owner')).toBeInTheDocument()
    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    expect(screen.getByText('Restaurant Owner')).toBeInTheDocument()
  })

  it('renders person images', () => {
    render(<Testimonials />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(5)
  })

  it('renders Testimonial subheading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
  })
})
