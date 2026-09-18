import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrandLogos } from './BrandLogos'

describe('BrandLogos', () => {
  it('renders 6 brand logos', () => {
    render(<BrandLogos />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })

  it('renders brand name alt text', () => {
    render(<BrandLogos />)
    expect(screen.getByAltText('Brand 1')).toBeInTheDocument()
    expect(screen.getByAltText('Brand 6')).toBeInTheDocument()
  })
})
