import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { VideoSection } from './VideoSection'
import { videoTitle, videoUrl } from '../data'

describe('VideoSection', () => {
  it('renders the tagline and play button linking the video', () => {
    render(<VideoSection />)
    expect(screen.getByText(videoTitle)).toBeInTheDocument()
    const play = screen.getByRole('link', { name: 'Play video' })
    expect(play).toHaveAttribute('href', videoUrl)
    expect(play).toHaveAttribute('target', '_blank')
  })
})
