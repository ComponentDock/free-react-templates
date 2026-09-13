import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeatureAds } from './FeatureAds'

describe('FeatureAds', () => {
  it('renders the feature ads section', () => {
    render(<FeatureAds />)
    expect(screen.getByRole('region', { name: 'Feature ads' })).toBeInTheDocument()
  })

  it('shows three ad images', () => {
    render(<FeatureAds />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })

  it('shows the Sale badge on first ad', () => {
    render(<FeatureAds />)
    expect(screen.getByText('Sale')).toBeInTheDocument()
  })

  it('shows the 10% off badge on second ad', () => {
    render(<FeatureAds />)
    expect(screen.getByText('10% off')).toBeInTheDocument()
  })

  it('reveals hover overlay content on hover', async () => {
    const user = userEvent.setup()
    render(<FeatureAds />)

    const overlayHeading = screen.getByText('Summer Dresses')
    const overlayContainer = overlayHeading.closest('div')!
    await user.hover(overlayContainer)

    expect(screen.getByText('Summer Dresses')).toBeInTheDocument()
    const shopNowLinks = screen.getAllByRole('link', { name: 'Shop Now' })
    expect(shopNowLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('has Shop Now links', () => {
    render(<FeatureAds />)
    const shopNowLinks = screen.getAllByRole('link', { name: 'Shop Now' })
    expect(shopNowLinks.length).toBeGreaterThanOrEqual(2)
  })
})
