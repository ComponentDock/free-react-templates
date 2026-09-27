import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders the heading text', () => {
    render(<VideoSection />)
    expect(screen.getByText('Find The Perfect')).toBeInTheDocument()
    expect(screen.getByText('Real Estate Agent Near You')).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<VideoSection />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<VideoSection />)
    const bgDiv = document.querySelector('[style*="terravault-video"]')
    expect(bgDiv).toBeInTheDocument()
  })
})
