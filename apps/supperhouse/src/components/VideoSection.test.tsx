import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders the play button with correct aria-label', () => {
    render(<VideoSection />)
    const playBtn = screen.getByRole('button', { name: /play video/i })
    expect(playBtn).toBeInTheDocument()
  })

  it('renders the heading text', () => {
    render(<VideoSection />)
    expect(
      screen.getByRole('heading', { level: 2, name: /We Always Serve the Vaping Hot/i }),
    ).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<VideoSection />)
    expect(screen.getByText(/Watch how our chefs transform/)).toBeInTheDocument()
  })

  it('has a background image via style', () => {
    render(<VideoSection />)
    const section = document.querySelector('section')
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })
  })
})
