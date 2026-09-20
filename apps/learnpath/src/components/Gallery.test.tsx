import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders 14 gallery images', () => {
    render(<Gallery />)

    const images = screen.getAllByAltText(/gallery image/i)
    expect(images.length).toBe(14)
  })

  it('images use picsum.photos URLs', () => {
    render(<Gallery />)

    const images = screen.getAllByAltText(/gallery image/i)
    images.forEach((img) => {
      expect(img.getAttribute('src')).toContain('picsum.photos/seed/learnpath-gallery-')
    })
  })

  it('first image has spanning classes', () => {
    render(<Gallery />)

    const images = screen.getAllByAltText(/gallery image/i)
    const firstContainer = images[0]?.closest('div')
    expect(firstContainer).not.toBeNull()
    expect(firstContainer!.className).toContain('col-span-2')
    expect(firstContainer!.className).toContain('row-span-2')
  })
})
