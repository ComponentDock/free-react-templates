import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedAds } from './FeaturedAds'

describe('FeaturedAds', () => {
  it('renders the section heading', () => {
    render(<FeaturedAds />)
    expect(screen.getByText('Featured Ads')).toBeInTheDocument()
  })

  it('renders all 8 ad cards', () => {
    render(<FeaturedAds />)
    expect(screen.getByText('Modern Apartment Downtown')).toBeInTheDocument()
    expect(screen.getByText('Vintage Leather Sofa')).toBeInTheDocument()
    expect(screen.getByText('iPhone 15 Pro Max')).toBeInTheDocument()
    expect(screen.getByText('2022 Toyota Camry')).toBeInTheDocument()
    expect(screen.getByText('Designer Dining Table')).toBeInTheDocument()
    expect(screen.getByText('Complete Book Collection')).toBeInTheDocument()
    expect(screen.getByText('MacBook Pro 16"')).toBeInTheDocument()
    expect(screen.getByText('Cozy Studio Apartment')).toBeInTheDocument()
  })

  it('renders prices for each ad', () => {
    render(<FeaturedAds />)
    expect(screen.getByText('$250,000')).toBeInTheDocument()
    expect(screen.getByText('$450')).toBeInTheDocument()
    expect(screen.getByText('$999')).toBeInTheDocument()
    expect(screen.getByText('$28,500')).toBeInTheDocument()
  })

  it('renders badges for featured and new ads', () => {
    render(<FeaturedAds />)
    const badges = screen.getAllByText('Featured')
    expect(badges.length).toBe(2)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('renders images with alt text', () => {
    render(<FeaturedAds />)
    expect(screen.getByAltText('Modern Apartment Downtown')).toBeInTheDocument()
    expect(screen.getByAltText('iPhone 15 Pro Max')).toBeInTheDocument()
  })
})
