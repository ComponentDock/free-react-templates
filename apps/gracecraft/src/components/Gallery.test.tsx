import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders 10 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(10)
  })

  it('each image link opens the full-size image', () => {
    render(<Gallery />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(10)
    for (const link of links) {
      expect(link).toHaveAttribute('href', expect.stringContaining('picsum.photos'))
    }
  })
})
