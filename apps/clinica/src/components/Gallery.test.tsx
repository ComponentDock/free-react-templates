import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'
import { gallery } from '../data'

describe('Gallery', () => {
  it('renders the title and all six images', () => {
    render(<Gallery />)
    expect(screen.getByText(gallery.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: gallery.title })).toBeInTheDocument()
    for (const image of gallery.images) {
      expect(screen.getByAltText(image.alt)).toBeInTheDocument()
    }
  })

  it('applies the dark overlay + zoom-out hover effect to every image', () => {
    const { container } = render(<Gallery />)
    const groups = container.querySelectorAll('.group')
    expect(groups.length).toBe(6)
    for (const group of groups) {
      const overlay = group.querySelector('.opacity-0') as HTMLElement
      expect(overlay).toHaveClass('bg-[rgba(1,10,28,0.3)]')
      expect(overlay).toHaveClass('group-hover:opacity-100')
      const image = group.querySelector('img') as HTMLElement
      expect(image).toHaveClass('group-hover:scale-100')
    }
  })
})
