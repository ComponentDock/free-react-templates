import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Happy Employers')).toBeInTheDocument()
  })

  it('renders testimonial cards with names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('David Kim')).toBeInTheDocument()
  })

  it('renders roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('HR Director at TechCorp')).toBeInTheDocument()
    expect(screen.getByText('CEO at StartupXYZ')).toBeInTheDocument()
  })

  it('renders quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/JobLaunch helped us find incredible talent/)).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBe(4)
  })
})
