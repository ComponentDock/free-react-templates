import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureBanners } from './FeatureBanners'

describe('FeatureBanners', () => {
  it('renders three feature cards', () => {
    render(<FeatureBanners />)
    expect(screen.getByRole('heading', { name: /Free Shipping/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Season Sale 50% Off/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Buy A Gift Card/i })).toBeInTheDocument()
  })

  it('renders descriptive text for each card', () => {
    render(<FeatureBanners />)
    const descriptions = screen.getAllByText(/Amet sit amet dolor/i)
    expect(descriptions).toHaveLength(3)
  })
})
