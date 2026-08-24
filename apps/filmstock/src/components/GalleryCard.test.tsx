import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GalleryCard } from './GalleryCard'
import { morePhotosLabel } from '../data'
import type { GalleryCategory } from '../data'

const category: GalleryCategory = { name: 'Nature', seed: 'filmstock-nature-1' }

describe('GalleryCard', () => {
  it('renders the category name as a heading', () => {
    render(<GalleryCard category={category} />)
    expect(screen.getByRole('heading', { level: 2, name: 'Nature' })).toBeInTheDocument()
  })

  it('renders the More Photos button', () => {
    render(<GalleryCard category={category} />)
    expect(screen.getByRole('link', { name: morePhotosLabel })).toBeInTheDocument()
  })

  it('renders an image with the category name in alt text', () => {
    render(<GalleryCard category={category} />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('alt', 'Nature photography')
  })

  it('applies grayscale filter by default', () => {
    render(<GalleryCard category={category} />)
    const img = screen.getByRole('img')
    expect(img.className).toContain('grayscale')
  })

  it('has a container with group class for hover effects', () => {
    const { container } = render(<GalleryCard category={category} />)
    const card = container.firstElementChild as HTMLElement
    expect(card.className).toContain('group')
  })
})
