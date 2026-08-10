import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoSection } from './VideoSection'
import { featuredVideoTitle, videoPosts } from '../data'

describe('VideoSection', () => {
  it('shows the FEATURED VIDEO title on the navy section', () => {
    render(<VideoSection />)
    const section = screen.getByRole('region', { name: featuredVideoTitle })
    expect(section).toHaveClass('bg-primary')
    expect(screen.getByRole('heading', { name: featuredVideoTitle })).toBeInTheDocument()
  })

  it('renders four video cards with images, headlines and meta rows', () => {
    render(<VideoSection />)
    const cards = screen.getAllByRole('link')
    expect(cards).toHaveLength(videoPosts.length)
    for (const video of videoPosts) {
      expect(screen.getByRole('img', { name: video.headline })).toBeInTheDocument()
      const link = screen.getByRole('link', { name: new RegExp(video.headline) })
      expect(link.textContent).toContain(video.meta.date)
      expect(link.textContent).toContain(video.meta.views)
    }
  })

  it('adds a circular play overlay to every card', () => {
    const { container } = render(<VideoSection />)
    expect(container.querySelectorAll('.rounded-full.border-2.border-white')).toHaveLength(
      videoPosts.length,
    )
  })
})
