import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading and 6 gallery images', () => {
    render(<Gallery />)
    expect(screen.getByText('Event Gallery')).toBeInTheDocument()
    const galleryLinks = screen.getAllByRole('link', { name: /Gallery image \d/ })
    expect(galleryLinks).toHaveLength(6)
  })

  it('each gallery image links to the gallery section', () => {
    render(<Gallery />)
    const links = screen.getAllByRole('link', { name: /Gallery image \d/ })
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#gallery')
    }
  })
})
