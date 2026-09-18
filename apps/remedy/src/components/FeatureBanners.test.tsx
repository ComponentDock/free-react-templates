import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeatureBanners } from './FeatureBanners'

describe('FeatureBanners', () => {
  it('renders all three feature banners', () => {
    render(<FeatureBanners />)
    expect(screen.getByText('Free Delivery')).toBeInTheDocument()
    expect(screen.getByText('New Medicine Everyday')).toBeInTheDocument()
    expect(screen.getByText('Medicines Guaranteed')).toBeInTheDocument()
  })

  it('has learn more links', () => {
    render(<FeatureBanners />)
    const links = screen.getAllByText('Learn more')
    expect(links).toHaveLength(3)
  })

  it('has icons', () => {
    render(<FeatureBanners />)
    const section = screen.getByTestId('feature-banners')
    expect(section).toBeInTheDocument()
  })
})
