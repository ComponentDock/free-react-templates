import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section', () => {
    render(<Gallery />)
    expect(screen.getByTestId('gallery')).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByText('Selected Work')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
  })

  it('renders all four gallery items', () => {
    render(<Gallery />)
    expect(screen.getByAltText('Project Alpha')).toBeInTheDocument()
    expect(screen.getByAltText('Project Beta')).toBeInTheDocument()
    expect(screen.getByAltText('Project Gamma')).toBeInTheDocument()
    expect(screen.getByAltText('Project Delta')).toBeInTheDocument()
  })

  it('renders gallery images with picsum URLs', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    const galleryImages = images.filter((img) =>
      img.getAttribute('src')?.includes('picsum.photos/seed/gallery'),
    )
    expect(galleryImages.length).toBe(4)
  })
})
