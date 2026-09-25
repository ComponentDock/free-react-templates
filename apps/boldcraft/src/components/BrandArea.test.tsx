import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrandArea } from './BrandArea'

describe('BrandArea', () => {
  it('renders all partner brand names', () => {
    render(<BrandArea />)
    const brands = ['Google', 'Spotify', 'Stripe', 'Notion', 'Figma', 'Linear']
    brands.forEach((b) => {
      expect(screen.getByText(b)).toBeInTheDocument()
    })
  })
})
