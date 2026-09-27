import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HotDeal } from './HotDeal'

describe('HotDeal', () => {
  it('renders the section title and hot deal heading', () => {
    render(<HotDeal />)
    expect(screen.getByRole('heading', { name: /Today's Hot Deal/i })).toBeInTheDocument()
  })

  it('displays the property price and description', () => {
    render(<HotDeal />)
    expect(screen.getByText('$540,000')).toBeInTheDocument()
    expect(screen.getByText(/Modern Apartment in Downtown/)).toBeInTheDocument()
  })

  it('shows property specs', () => {
    render(<HotDeal />)
    expect(screen.getByText(/1,200 sqft/)).toBeInTheDocument()
    expect(screen.getByText(/3 Beds/)).toBeInTheDocument()
    expect(screen.getByText(/2 Baths/)).toBeInTheDocument()
    expect(screen.getByText(/1 Garage/)).toBeInTheDocument()
  })

  it('displays agent information', () => {
    render(<HotDeal />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Real Estate Agent')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Call Now/i })).toBeInTheDocument()
  })
})
