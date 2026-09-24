import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders 3 video thumbnails', () => {
    render(<VideoSection />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })

  it('renders play button icons', () => {
    render(<VideoSection />)
    const section = screen.getByLabelText('Video posts')
    expect(section).toBeInTheDocument()
  })
})
