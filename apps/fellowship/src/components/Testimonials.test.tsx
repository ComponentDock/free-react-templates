import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Change Lives')
  })

  it('renders all testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('renders locations', () => {
    render(<Testimonials />)
    expect(screen.getByText('Austin, TX')).toBeInTheDocument()
    expect(screen.getByText('Portland, OR')).toBeInTheDocument()
    expect(screen.getByText('Denver, CO')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<Testimonials />)
    expect(screen.getByLabelText('Testimonials')).toBeInTheDocument()
  })
})
