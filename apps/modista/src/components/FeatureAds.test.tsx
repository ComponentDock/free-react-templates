import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureAds } from './FeatureAds'

describe('FeatureAds', () => {
  it('renders three banner images', () => {
    render(<FeatureAds />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
    images.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })

  it('displays badge labels', () => {
    render(<FeatureAds />)
    expect(screen.getAllByText('Sale').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('10% off').length).toBeGreaterThanOrEqual(1)
  })

  it('renders hover overlay headings', () => {
    render(<FeatureAds />)
    expect(screen.getAllByText('Trendy Jackets').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Designer Bags').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Shop Now links', () => {
    render(<FeatureAds />)
    const shopLinks = screen.getAllByText('Shop Now')
    expect(shopLinks.length).toBeGreaterThanOrEqual(2)
  })
})
