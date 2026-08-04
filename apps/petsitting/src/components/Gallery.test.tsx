import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('shows the heading and six images labelled by breed', () => {
    const { container } = render(<Gallery />)

    expect(screen.getByRole('heading', { level: 2, name: 'Pets Gallery' })).toBeInTheDocument()

    for (const breed of [
      'Persian Cat',
      'Pomeranian',
      'Sphynx Cat',
      'British Shorthair',
      'Beagle',
      'Pug',
    ]) {
      expect(screen.getByText(breed)).toBeInTheDocument()
    }

    const images = Array.from(container.querySelectorAll('img'))
    expect(images.length).toBeGreaterThanOrEqual(6)
    for (const image of images) {
      expect(image).toHaveAttribute('alt')
      expect(image.getAttribute('src')).toMatch(/picsum\.photos\/seed\/petsitting-gallery/)
    }
  })
})
