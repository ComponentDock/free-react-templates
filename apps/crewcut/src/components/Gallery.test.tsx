import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders six gallery images with hover captions', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
    for (const image of images) {
      expect(image).toHaveAttribute('src', expect.stringMatching(/crewcut-gallery-\d/))
    }
    const captions = screen.getAllByText('Upper Cutting')
    expect(captions).toHaveLength(6)
  })
})
