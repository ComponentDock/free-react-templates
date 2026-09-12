import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeaturedAds } from './FeaturedAds'

describe('FeaturedAds', () => {
  it('renders the heading', () => {
    render(<FeaturedAds />)
    expect(screen.getByRole('heading', { name: 'Featured Ads' })).toBeInTheDocument()
  })

  it('renders listing cards', () => {
    render(<FeaturedAds />)
    expect(screen.getByText('New Black Car')).toBeInTheDocument()
    expect(screen.getByText('Own New House')).toBeInTheDocument()
    expect(screen.getByText('Wooden Chair and Table')).toBeInTheDocument()
    expect(screen.getByText('iPhone X Gray')).toBeInTheDocument()
  })
})
