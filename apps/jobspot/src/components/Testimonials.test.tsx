import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Happy Clients/i })).toBeInTheDocument()
  })

  it('renders testimonial cards with quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Far far away, behind the word mountains/i)).toBeInTheDocument()
    expect(screen.getByText(/Separated they live in Bookmarksgrove/i)).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden/i)).toBeInTheDocument()
  })

  it('renders testimonial names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Garreth Smith')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Web Developer')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Designer')).toBeInTheDocument()
    expect(screen.getByText('Product Manager')).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBeGreaterThanOrEqual(3)
  })
})
