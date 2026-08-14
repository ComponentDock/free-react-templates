import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { banners } from '../data'
import { BannerBand } from './BannerBand'

describe('BannerBand', () => {
  it('renders two promotional image banners linking to the shop', () => {
    render(<BannerBand />)

    expect(screen.getByRole('link', { name: 'Seasonal fruit offer' })).toHaveAttribute(
      'href',
      '#shop',
    )
    expect(screen.getByRole('link', { name: 'Fresh produce offer' })).toHaveAttribute(
      'href',
      '#shop',
    )
    expect(screen.getByRole('img', { name: 'Seasonal fruit offer' })).toHaveAttribute(
      'src',
      banners.first,
    )
    expect(screen.getByRole('img', { name: 'Fresh produce offer' })).toHaveAttribute(
      'src',
      banners.second,
    )
  })

  it('handles clicks on both banner links without navigating', () => {
    render(<BannerBand />)

    fireEvent.click(screen.getByRole('link', { name: 'Seasonal fruit offer' }))
    fireEvent.click(screen.getByRole('link', { name: 'Fresh produce offer' }))
  })
})
