import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading and testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Happy Customer Says')).toBeInTheDocument()
    expect(screen.getByText('Forden Miliard')).toBeInTheDocument()
    expect(screen.getByText('Manel Djuice')).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
  })

  it('renders testimonial quotes and roles', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Outstanding hosting/)).toBeInTheDocument()
    expect(screen.getByText('CEO & Founder')).toBeInTheDocument()
    expect(screen.getByText('CTO')).toBeInTheDocument()
    expect(screen.getByText('Marketing Director')).toBeInTheDocument()
  })
})
