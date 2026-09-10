import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline and animated text', () => {
    render(<Hero />)
    expect(screen.getByText('Car Wash')).toBeInTheDocument()
    expect(screen.getByText(/& Detailing/)).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<Hero />)
    expect(screen.getByText(/Professional car wash/)).toBeInTheDocument()
  })

  it('renders CTA button linking to services', () => {
    render(<Hero />)
    const cta = screen.getByText('Our Services')
    expect(cta).toBeInTheDocument()
    expect(cta.closest('a')).toHaveAttribute('href', '#services')
  })
})
