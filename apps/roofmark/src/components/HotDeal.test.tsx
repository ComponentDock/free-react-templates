import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HotDeal } from './HotDeal'

describe('HotDeal', () => {
  it('renders the property image', () => {
    render(<HotDeal />)
    expect(screen.getByAltText('Hot deal property')).toBeInTheDocument()
  })

  it('renders price', () => {
    render(<HotDeal />)
    expect(screen.getByText('$3,800')).toBeInTheDocument()
  })

  it('renders title', () => {
    render(<HotDeal />)
    expect(screen.getByText('Sunny Apartment in Manhattan')).toBeInTheDocument()
  })

  it('renders address', () => {
    render(<HotDeal />)
    expect(screen.getByText(/123 Street, New York, USA/)).toBeInTheDocument()
  })

  it('renders agent info', () => {
    render(<HotDeal />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Real Estate Agent')).toBeInTheDocument()
    expect(screen.getByAltText('Agent')).toBeInTheDocument()
  })

  it('renders stats', () => {
    render(<HotDeal />)
    expect(screen.getByText('2,400')).toBeInTheDocument()
    expect(screen.getByText('Sq Ft')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getByText('Beds')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('Baths')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('Garage')).toBeInTheDocument()
  })

  it('renders tags', () => {
    render(<HotDeal />)
    expect(screen.getByText('House')).toBeInTheDocument()
    expect(screen.getByText('For Sale')).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<HotDeal />)
    expect(screen.getByText(/This stunning apartment/)).toBeInTheDocument()
  })
})
