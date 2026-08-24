import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'
import { galleryCategories, gallerySectionLabel } from '../data'

describe('Gallery', () => {
  it('renders with the correct aria-label', () => {
    render(<Gallery />)
    expect(screen.getByRole('region', { name: gallerySectionLabel })).toBeInTheDocument()
  })

  it('renders all 9 category cards', () => {
    render(<Gallery />)
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings).toHaveLength(galleryCategories.length)
  })

  it('displays category names', () => {
    render(<Gallery />)
    for (const cat of galleryCategories) {
      expect(screen.getByText(cat.name)).toBeInTheDocument()
    }
  })

  it('renders a More Photos link for each category', () => {
    render(<Gallery />)
    const morePhotosLinks = screen.getAllByRole('link', { name: /More Photos/i })
    expect(morePhotosLinks).toHaveLength(galleryCategories.length)
  })

  it('renders images with alt text', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(galleryCategories.length)
    for (const img of images) {
      expect(img).toHaveAttribute('alt', expect.stringContaining('photography'))
    }
  })
})
