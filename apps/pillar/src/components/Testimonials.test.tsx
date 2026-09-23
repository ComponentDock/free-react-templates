import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonials heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
  })

  it('renders three testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Cloe Marena')).toBeInTheDocument()
    expect(screen.getByText('Nathalie Channie')).toBeInTheDocument()
    expect(screen.getByText('Will Turner')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    const roles = screen.getAllByText('Owner of Building Co.')
    expect(roles.length).toBe(3)
  })
})
