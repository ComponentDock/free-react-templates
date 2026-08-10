import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeaturedModels } from './FeaturedModels'

describe('FeaturedModels', () => {
  it('renders the section heading', () => {
    render(<FeaturedModels />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'A Professional Model Agency' }),
    ).toBeInTheDocument()
  })

  it('renders four model cards with names and measurements', () => {
    render(<FeaturedModels />)

    for (const name of ['Andrea Smith', 'Nicole Wall', 'Cindy Smith', 'Jannah Doe']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }

    // Stats shown per card: Height 185 / Bust 79 / Waist 40 / Hips 87 / Shoe 40
    expect(screen.getAllByText('185').length).toBe(4)
    expect(screen.getAllByText('79').length).toBe(4)
    expect(screen.getAllByText('40').length).toBe(8)
    expect(screen.getAllByText('87').length).toBe(4)
  })

  it('renders model photos from seeded picsum URLs', () => {
    const { container } = render(<FeaturedModels />)

    const images = Array.from(container.querySelectorAll('img'))
    expect(images.length).toBe(4)
    for (const image of images) {
      expect(image.getAttribute('src')).toMatch(/picsum\.photos\/seed\/pose-/)
    }
  })
})
