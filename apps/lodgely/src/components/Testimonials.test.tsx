import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the People Says heading', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('People Says')
  })

  it('renders 3 testimonial cards', () => {
    render(<Testimonials />)

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)

    expect(screen.getByText(/absolutely wonderful experience/)).toBeInTheDocument()
    expect(screen.getByText(/beautifully designed/)).toBeInTheDocument()
  })

  it('renders author avatars', () => {
    render(<Testimonials />)

    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBe(3)
  })
})
