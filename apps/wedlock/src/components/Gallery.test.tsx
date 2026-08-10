import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the memories heading and a photo grid', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 1, name: 'Your memories' })).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
    for (const image of images) {
      expect(image.getAttribute('src')).toMatch(/picsum\.photos\/seed\/wedlock-/)
    }
  })

  it('renders each photo with a descriptive alt text', () => {
    render(<Gallery />)
    for (const image of screen.getAllByRole('img')) {
      expect(image.getAttribute('alt')).toBeTruthy()
    }
  })
})
