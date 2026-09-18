import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedProducts } from './FeaturedProducts'

describe('FeaturedProducts', () => {
  it('renders three featured products with subtitles, titles, and explore buttons', () => {
    render(<FeaturedProducts />)

    expect(screen.getByText('Orthopedic Memory Foam Pillow')).toBeInTheDocument()
    expect(screen.getByText('Premium Feather-Down Pillow')).toBeInTheDocument()
    expect(screen.getByText('Bamboo Cooling Pillow')).toBeInTheDocument()

    const subtitles = screen.getAllByText('Started from $10')
    expect(subtitles.length).toBe(3)

    const buttons = screen.getAllByRole('link', { name: 'Explore Now' })
    expect(buttons.length).toBe(3)
  })
})
