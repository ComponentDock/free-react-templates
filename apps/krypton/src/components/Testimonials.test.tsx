import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'What Clients Say' })).toBeInTheDocument()
  })

  it('shows three testimonial cards with quotes', () => {
    render(<Testimonials />)

    expect(screen.getByText(/transformed our online presence/)).toBeInTheDocument()
    expect(screen.getByText(/absolute pleasure/)).toBeInTheDocument()
    expect(screen.getByText(/results speak for themselves/)).toBeInTheDocument()
  })

  it('displays author names and companies', () => {
    render(<Testimonials />)

    expect(screen.getByText('Rebecca Torres')).toBeInTheDocument()
    expect(screen.getByText('Michael Lawrence')).toBeInTheDocument()
    expect(screen.getByText('Lisa Nguyen')).toBeInTheDocument()
  })

  it('has the correct section landmark', () => {
    render(<Testimonials />)
    expect(screen.getByRole('region', { name: 'Testimonials' })).toBeInTheDocument()
  })
})
