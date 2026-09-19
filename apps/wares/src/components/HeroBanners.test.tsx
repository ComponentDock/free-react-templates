import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroBanners } from './HeroBanners'

describe('HeroBanners', () => {
  it('renders New Collection banner', () => {
    render(<HeroBanners />)
    expect(screen.getByText('New Collection')).toBeInTheDocument()
    expect(
      screen.getByText('Discover the latest trends in fashion and accessories.'),
    ).toBeInTheDocument()
  })

  it('renders Hot Deal banner', () => {
    render(<HeroBanners />)
    expect(screen.getByText('Hot Deal')).toBeInTheDocument()
    expect(screen.getByText('Up to 50% OFF')).toBeInTheDocument()
  })

  it('renders Shop Now buttons', () => {
    render(<HeroBanners />)
    const buttons = screen.getAllByText('Shop Now')
    expect(buttons).toHaveLength(2)
  })
})
