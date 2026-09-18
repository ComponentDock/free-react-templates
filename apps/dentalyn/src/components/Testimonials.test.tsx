import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows heading and patient quotes', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByText('Arron Ramsey')).toBeInTheDocument()
    expect(screen.getByText('Emily Watson')).toBeInTheDocument()
    expect(screen.getByText('David Park')).toBeInTheDocument()
  })

  it('shows testimonial roles', () => {
    render(<Testimonials />)

    const roles = screen.getAllByText('Dental Patient')
    expect(roles.length).toBe(3)
  })

  it('renders patient photos', () => {
    render(<Testimonials />)

    expect(screen.getByAltText('Arron Ramsey')).toBeInTheDocument()
    expect(screen.getByAltText('Emily Watson')).toBeInTheDocument()
    expect(screen.getByAltText('David Park')).toBeInTheDocument()
  })
})
