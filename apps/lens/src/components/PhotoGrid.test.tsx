import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PhotoGrid } from './PhotoGrid'

describe('PhotoGrid', () => {
  it('renders 12 photo items in a grid', () => {
    render(<PhotoGrid />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(12)

    images.forEach((img) => {
      expect(img).toHaveAttribute('loading', 'lazy')
      expect(img).toHaveAttribute('alt', expect.stringMatching(/^Photography \d+$/))
    })
  })

  it('wraps each photo in a link', () => {
    render(<PhotoGrid />)

    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(12)

    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    })
  })
})
