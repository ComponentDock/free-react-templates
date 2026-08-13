import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GalleryStrip } from './GalleryStrip'

describe('GalleryStrip', () => {
  it('renders all six edge-to-edge images', () => {
    render(<GalleryStrip />)
    const cells = [
      'Gallery strip photo one',
      'Gallery strip photo two',
      'Gallery strip photo three',
      'Gallery strip photo four',
      'Gallery strip photo five',
      'Gallery strip photo six',
    ]
    for (const alt of cells) {
      expect(screen.getByAltText(alt)).toBeInTheDocument()
    }
  })

  it('applies the dark overlay + zoom hover effect to every cell', () => {
    const { container } = render(<GalleryStrip />)
    const groups = container.querySelectorAll('.group')
    expect(groups.length).toBe(6)
    for (const group of groups) {
      const overlay = group.querySelector('.opacity-0') as HTMLElement
      expect(overlay).toHaveClass('bg-[rgba(1,10,28,0.3)]')
      expect(overlay).toHaveClass('group-hover:opacity-100')
    }
  })
})
