import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
  })

  it('renders all three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Joshua Darren')).toBeInTheDocument()
    expect(screen.getByText('Emily Carter')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    const roles = screen.getAllByText('Companies Client')
    expect(roles.length).toBe(3)
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/The Big Oxmox/)).toBeInTheDocument()
    expect(screen.getByText(/all-powerful Pointing/)).toBeInTheDocument()
    expect(screen.getByText(/small river named Duden/)).toBeInTheDocument()
  })
})
