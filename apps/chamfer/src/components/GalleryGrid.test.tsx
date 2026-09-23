import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GalleryGrid } from './GalleryGrid'

describe('GalleryGrid', () => {
  it('renders the gallery heading', () => {
    render(<GalleryGrid />)
    expect(screen.getByRole('heading', { name: /Our Gallery/i })).toBeInTheDocument()
  })

  it('renders six gallery images', () => {
    render(<GalleryGrid />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
  })

  it('shows project names on hover', () => {
    render(<GalleryGrid />)
    expect(screen.getByText('Modern Living Room')).toBeInTheDocument()
    expect(screen.getByText('Kitchen Renovation')).toBeInTheDocument()
    expect(screen.getByText('Penthouse View')).toBeInTheDocument()
  })
})
