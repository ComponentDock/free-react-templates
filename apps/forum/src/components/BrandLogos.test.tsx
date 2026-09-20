import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandLogos } from './BrandLogos'

describe('BrandLogos', () => {
  it('renders all 5 brand logos', () => {
    render(<BrandLogos />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(5)
  })

  it('renders logos with grayscale class', () => {
    render(<BrandLogos />)
    const images = screen.getAllByRole('img')
    images.forEach((img) => {
      expect(img.className).toContain('grayscale')
    })
  })
})
