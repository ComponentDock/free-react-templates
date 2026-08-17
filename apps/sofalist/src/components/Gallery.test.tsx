import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'
import { GALLERY_ITEMS } from '../data'

describe('Gallery', () => {
  it('renders the heading and all eight furniture tiles with captions', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: 'Furniture Collection' })).toBeInTheDocument()
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(GALLERY_ITEMS.length)
    for (const item of GALLERY_ITEMS) {
      expect(screen.getByRole('link', { name: `View ${item.caption}` })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: item.caption })).toHaveAttribute('src', item.image)
    }
  })
})
