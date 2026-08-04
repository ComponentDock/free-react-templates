import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoDemo } from './VideoDemo'

describe('VideoDemo', () => {
  it('renders the heading, a play button, and app screenshots', () => {
    render(<VideoDemo />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'See Appco in Action' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play the Appco demo video' })).toBeInTheDocument()

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
    for (const image of images) {
      expect(image).toHaveAccessibleName()
    }
  })
})
