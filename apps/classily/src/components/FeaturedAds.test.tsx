import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedAds } from './FeaturedAds'

describe('FeaturedAds', () => {
  it('renders the section heading', () => {
    render(<FeaturedAds />)
    expect(screen.getByRole('heading', { name: 'Featured Ads' })).toBeInTheDocument()
    expect(screen.getByText('Handpicked listings from top categories')).toBeInTheDocument()
  })

  it('renders all 4 ad cards with titles', () => {
    render(<FeaturedAds />)
    expect(screen.getByText('Modern Apartment in Downtown')).toBeInTheDocument()
    expect(screen.getByText('Vintage Leather Sofa')).toBeInTheDocument()
    expect(screen.getByText('Senior Developer Position')).toBeInTheDocument()
    expect(screen.getByText('2022 Electric Sedan')).toBeInTheDocument()
  })

  it('shows price and location for each ad', () => {
    render(<FeaturedAds />)
    expect(screen.getByText('$1,200/mo')).toBeInTheDocument()
    expect(screen.getByText('New York, NY')).toBeInTheDocument()
    expect(screen.getByText('$450')).toBeInTheDocument()
    expect(screen.getByText('Los Angeles, CA')).toBeInTheDocument()
    expect(screen.getByText('$120k/yr')).toBeInTheDocument()
    expect(screen.getByText('San Francisco, CA')).toBeInTheDocument()
    expect(screen.getByText('$28,500')).toBeInTheDocument()
    expect(screen.getByText('Austin, TX')).toBeInTheDocument()
  })

  it('renders images for each ad', () => {
    render(<FeaturedAds />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})
