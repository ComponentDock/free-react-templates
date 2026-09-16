import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders section heading', () => {
    render(<Gallery />)
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Galleries')).toBeInTheDocument()
  })

  it('renders seven gallery images', () => {
    render(<Gallery />)
    const imgs = screen.getAllByRole('img') as HTMLImageElement[]
    const galleryImgs = imgs.filter((img) => img.alt.toLowerCase().startsWith('gallery image'))
    expect(galleryImgs.length).toBe(7)
  })

  it('renders gallery links with accessible names', () => {
    render(<Gallery />)
    const links = screen.getAllByRole('link')
    const galleryLinks = links.filter((link) => {
      const label = (link.getAttribute('aria-label') ?? link.textContent ?? '').toLowerCase()
      return label.includes('view gallery image')
    })
    expect(galleryLinks.length).toBe(7)
  })
})
