import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: /patient/i })).toBeInTheDocument()
  })

  it('renders 3 testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText(/exceptional/i)).toBeInTheDocument()
    expect(screen.getByText(/wonderful experience/i)).toBeInTheDocument()
    expect(screen.getByText(/excellent care/i)).toBeInTheDocument()
  })

  it('displays testimonial author names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('displays affiliation text for each testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText('Patient, Cardiology')).toBeInTheDocument()
    expect(screen.getByText('Patient, Orthopaedy')).toBeInTheDocument()
    expect(screen.getByText('Patient, Pediatry')).toBeInTheDocument()
  })

  it('renders avatar images with correct alt text', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Avatar of Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByAltText('Avatar of Michael Chen')).toBeInTheDocument()
    expect(screen.getByAltText('Avatar of Emily Davis')).toBeInTheDocument()
  })

  it('has proper aria-label', () => {
    render(<Testimonials />)
    expect(screen.getByRole('region', { name: /patient testimonials/i })).toBeInTheDocument()
  })
})
