import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'
import { galleryLabel, gallerySeeds, scrollLeftLabel, scrollRightLabel } from '../data'

describe('Gallery', () => {
  it('renders a strip of six photos', () => {
    const { container } = render(<Gallery />)

    expect(screen.getByRole('heading', { level: 2, name: galleryLabel })).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(gallerySeeds.length)
  })

  it('advances and wraps the strip with the arrow buttons', () => {
    render(<Gallery />)
    const track = screen.getByTestId('gallery-track')
    const next = screen.getByRole('button', { name: scrollRightLabel })
    const prev = screen.getByRole('button', { name: scrollLeftLabel })

    expect(track.style.transform).toBe('translateX(-0%)')

    fireEvent.click(next)
    expect(track.style.transform).toBe('translateX(-100%)')

    for (let i = 0; i < gallerySeeds.length - 1; i += 1) {
      fireEvent.click(next)
    }
    expect(track.style.transform).toBe('translateX(-0%)')

    fireEvent.click(prev)
    expect(track.style.transform).toBe('translateX(-500%)')
  })
})
