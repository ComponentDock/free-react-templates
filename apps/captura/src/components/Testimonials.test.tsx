import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section title', () => {
    render(<Testimonials />)
    expect(screen.getByText('Our Customers Say')).toBeInTheDocument()
  })

  it('renders the testimonial quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/create a website for the first time/)).toBeInTheDocument()
  })

  it('renders the author name', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Robert Thomson/)).toBeInTheDocument()
  })

  it('renders the author avatar', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Robert Thomson')).toBeInTheDocument()
  })
})
