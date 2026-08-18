import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'
import { galleryItems } from '../data'

describe('Gallery', () => {
  it('renders six photo tiles with hover captions in a tight grid', () => {
    render(<Gallery />)

    const section = screen.getByRole('region', { name: /portfolio gallery/i })
    const figures = section.querySelectorAll('figure')
    expect(figures).toHaveLength(6)

    galleryItems.forEach((item, i) => {
      expect(screen.getByRole('img', { name: item.title })).toHaveAttribute(
        'src',
        expect.stringContaining(`shutterly-gallery-${i + 1}`),
      )
      expect(screen.getByText(item.span)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
    })

    // Captions sit inside an overlay that is hidden until hover
    const overlay = section.querySelector('.opacity-0')
    expect(overlay).toBeInTheDocument()
  })
})
