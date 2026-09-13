import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PromoBanners } from './PromoBanners'

describe('PromoBanners', () => {
  it('renders the promo banners section', () => {
    render(<PromoBanners />)
    expect(screen.getByRole('region', { name: 'Promotional banners' })).toBeInTheDocument()
  })

  it('shows two promo images', () => {
    render(<PromoBanners />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
  })

  it('reveals overlay content on hover', async () => {
    const user = userEvent.setup()
    render(<PromoBanners />)

    const firstBanner = screen.getAllByRole('img')[0]!.closest('div')!
    await user.hover(firstBanner)

    const headings = screen.getAllByText('Best Summer Collection')
    expect(headings.length).toBeGreaterThanOrEqual(1)

    const shopLinks = screen.getAllByRole('link', { name: 'Shop Now' })
    expect(shopLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('has Shop Now links', () => {
    render(<PromoBanners />)
    const shopLinks = screen.getAllByRole('link', { name: 'Shop Now' })
    expect(shopLinks).toHaveLength(2)
  })
})
