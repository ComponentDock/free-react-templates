import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and testimonial content', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /What They Are Saying/i })).toBeInTheDocument()
    expect(screen.getByText(/Zenbloom has completely transformed/i)).toBeInTheDocument()
  })

  it('renders mini feature items', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Certified Instructors/i)).toBeInTheDocument()
    expect(screen.getByText(/Personalized Programs/i)).toBeInTheDocument()
  })
})
