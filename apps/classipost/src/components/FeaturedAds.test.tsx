import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedAds } from './FeaturedAds'

describe('FeaturedAds', () => {
  it('renders the section heading', () => {
    render(<FeaturedAds />)
    expect(screen.getByRole('heading', { name: 'Featured Ads' })).toBeInTheDocument()
  })

  it('renders all four ad cards', () => {
    render(<FeaturedAds />)
    expect(screen.getByText('Modern Apartment in Downtown')).toBeInTheDocument()
    expect(screen.getByText('Vintage Wooden Bookshelf')).toBeInTheDocument()
    expect(screen.getByText('Latest Smartphone Pro Max')).toBeInTheDocument()
    expect(screen.getByText('Sedan 2024 Low Mileage')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<FeaturedAds />)
    expect(screen.getByText('$1,200')).toBeInTheDocument()
    expect(screen.getByText('$250')).toBeInTheDocument()
    expect(screen.getByText('$899')).toBeInTheDocument()
    expect(screen.getByText('$24,500')).toBeInTheDocument()
  })

  it('displays locations', () => {
    render(<FeaturedAds />)
    expect(screen.getByText('New York, NY')).toBeInTheDocument()
    expect(screen.getByText('Los Angeles, CA')).toBeInTheDocument()
    expect(screen.getByText('Chicago, IL')).toBeInTheDocument()
    expect(screen.getByText('Houston, TX')).toBeInTheDocument()
  })

  it('has save buttons with accessible labels', () => {
    render(<FeaturedAds />)
    const saveButtons = screen.getAllByRole('button', { name: /Save/i })
    expect(saveButtons.length).toBe(4)
  })
})
