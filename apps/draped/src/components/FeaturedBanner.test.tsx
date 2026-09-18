import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedBanner } from './FeaturedBanner'

describe('FeaturedBanner', () => {
  const defaultProps = {
    subtitle: 'Test Subtitle',
    headline: 'Test Headline',
    image: 'https://picsum.photos/seed/test/1400/600',
  }

  it('renders subtitle', () => {
    render(<FeaturedBanner {...defaultProps} />)
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
  })

  it('renders headline', () => {
    render(<FeaturedBanner {...defaultProps} />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Test Headline')
  })

  it('renders Shop Now link', () => {
    render(<FeaturedBanner {...defaultProps} />)
    expect(screen.getByRole('link', { name: /shop now/i })).toBeInTheDocument()
  })

  it('renders background image', () => {
    render(<FeaturedBanner {...defaultProps} />)
    const bgImage = screen.getByRole('presentation')
    expect(bgImage).toHaveAttribute('src', 'https://picsum.photos/seed/test/1400/600')
  })
})
