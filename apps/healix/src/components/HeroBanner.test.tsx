import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HeroBanner } from './HeroBanner'

describe('HeroBanner', () => {
  it('renders the headline', () => {
    render(<HeroBanner />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/most valuable thing/i)
  })

  it('renders the subtext', () => {
    render(<HeroBanner />)
    expect(screen.getByText(/world-class medical services/i)).toBeInTheDocument()
  })

  it('renders the appointment search form', () => {
    render(<HeroBanner />)
    expect(screen.getByLabelText(/select doctor/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/select department/i)).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<HeroBanner />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('has hero banner section role', () => {
    render(<HeroBanner />)
    expect(screen.getByRole('region', { name: /hero banner/i })).toBeInTheDocument()
  })
})
