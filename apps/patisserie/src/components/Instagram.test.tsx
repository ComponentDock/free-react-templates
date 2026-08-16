import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Instagram } from './Instagram'
import { instagram } from '../data'

describe('Instagram', () => {
  it('renders the heading and the gold-bordered handle button', () => {
    render(<Instagram />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Follow us on Instagram')
    const handle = screen.getByRole('link', { name: instagram.handle })
    expect(handle.className).toContain('border-brand')
    expect(handle.className).toContain('text-brand')
  })

  it('renders the four-column grid of four square photos', () => {
    const { container } = render(<Instagram />)
    const grid = container.querySelector('ul')
    expect(grid?.className).toContain('md:grid-cols-4')
    const photos = container.querySelectorAll('img')
    expect(photos).toHaveLength(4)
    for (const photo of photos) {
      expect(photo.className).toContain('aspect-square')
    }
  })
})
