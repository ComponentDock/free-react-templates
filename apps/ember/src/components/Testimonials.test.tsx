import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Customers Feedback/i })).toBeInTheDocument()
  })

  it('renders all three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Mosan Cameron/i)).toBeInTheDocument()
    expect(screen.getByText(/Sarah Mitchell/i)).toBeInTheDocument()
    expect(screen.getByText(/David Chen/i)).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<Testimonials />)
    expect(screen.getAllByText(/5 out of 5 stars/i).length).toBe(3)
  })
})
