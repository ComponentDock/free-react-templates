import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoSection } from './VideoSection'
import { playVideoLabel, videoDate, videoSlides, videoTitle } from '../data'

describe('VideoSection', () => {
  it('shows the circular play button, date and featured title', () => {
    render(<VideoSection />)

    expect(screen.getByRole('link', { name: playVideoLabel })).toBeInTheDocument()
    expect(screen.getAllByText(videoDate).length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { name: videoTitle })).toBeInTheDocument()
  })

  it('renders six video slideshow cards under an accent top border', () => {
    const { container } = render(<VideoSection />)

    for (const post of videoSlides) {
      // The link's accessible name concatenates date + title.
      expect(screen.getByRole('link', { name: new RegExp(post.title) })).toBeInTheDocument()
    }
    // The strip has a 2px accent top border.
    const strip = container.querySelector('.border-t-2.border-accent')
    expect(strip).not.toBeNull()
    // Each card shows a thumbnail image and a play-icon overlay.
    expect(container.querySelectorAll('img')).toHaveLength(7)
    expect(container.querySelectorAll('svg')).toHaveLength(7)
  })
})
