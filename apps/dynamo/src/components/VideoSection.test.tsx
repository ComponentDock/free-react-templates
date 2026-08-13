import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders the heading, blurb, and Read More button', () => {
    render(<VideoSection />)
    expect(
      screen.getByRole('heading', { name: 'We produce or supply Goods, & Services' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Watch how our teams design/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()
  })

  it('renders a play button over the video background image', () => {
    const { container } = render(<VideoSection />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
    const box = container.querySelector('[data-video-box]')
    expect(box).not.toBeNull()
    expect(box!.getAttribute('style')).toContain('url(')
  })

  it('opens a video lightbox from the play button and closes it', async () => {
    const user = userEvent.setup()
    render(<VideoSection />)
    await user.click(screen.getByRole('button', { name: /play video/i }))
    expect(screen.getByTitle(/video/i)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close video/i }))
    expect(screen.queryByTitle(/video/i)).not.toBeInTheDocument()
  })
})
