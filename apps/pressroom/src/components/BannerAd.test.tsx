import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BannerAd } from './BannerAd'

describe('BannerAd', () => {
  it('renders the ad image with the default alt text', () => {
    render(<BannerAd image="https://example.com/ad.png" />)
    expect(screen.getByRole('img', { name: 'Advertisement' })).toHaveAttribute(
      'src',
      'https://example.com/ad.png',
    )
  })

  it('renders a custom alt text when provided', () => {
    render(<BannerAd image="https://example.com/ad.png" alt="Promo" />)
    expect(screen.getByRole('img', { name: 'Promo' })).toBeInTheDocument()
  })
})
