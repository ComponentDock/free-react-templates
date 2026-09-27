import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Testimonials from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonials heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('My Happy Clients')).toBeInTheDocument()
  })

  it('renders 3 testimonial cards', () => {
    render(<Testimonials />)

    expect(screen.getByText('Eric Ingram')).toBeInTheDocument()
    expect(screen.getByText('Product Designer @Facebook')).toBeInTheDocument()

    expect(screen.getByText('Ryan Mullins')).toBeInTheDocument()
    expect(screen.getByText('Product Designer @Shopify')).toBeInTheDocument()

    expect(screen.getByText('Erica Miller')).toBeInTheDocument()
    expect(screen.getByText('Product Designer @Twitter')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)

    const quotes = screen.getAllByText(/Far far away, behind the word mountains/)
    expect(quotes.length).toBe(3)
  })

  it('renders avatar images', () => {
    render(<Testimonials />)

    const avatars = screen.getAllByRole('img', { hidden: true })
    expect(avatars.length).toBe(3)
  })
})
