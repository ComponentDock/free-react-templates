import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders section heading', () => {
    render(<Gallery />)
    expect(screen.getByText('Gallery')).toBeInTheDocument()
  })

  it('renders all six gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByAltText(/gallery image/i)
    expect(images).toHaveLength(6)
  })

  it('wraps images in links', () => {
    render(<Gallery />)
    const links = screen.getAllByRole('link')
    const galleryLinks = links.filter((l) => l.querySelector('img[alt^="Gallery image"]') !== null)
    expect(galleryLinks).toHaveLength(6)
  })
})
