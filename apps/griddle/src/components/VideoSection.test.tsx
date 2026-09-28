import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders the video heading', () => {
    render(<VideoSection />)
    // "Burger" and "Bachelor" are on separate lines split by <br>
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent(/Burger/)
    expect(heading).toHaveTextContent(/Bachelor/)
  })

  it('displays the subtitle', () => {
    render(<VideoSection />)
    expect(screen.getByText('How we make delicious Burger')).toBeInTheDocument()
  })

  it('renders the play button with correct aria-label', () => {
    render(<VideoSection />)
    expect(screen.getByRole('link', { name: /play video/i })).toHaveAttribute(
      'href',
      'https://www.youtube.com/watch?v=vLnPwxZdW4Y',
    )
  })

  it('has a background image', () => {
    const { container } = render(<VideoSection />)
    const bgImg = container.querySelector('img[aria-hidden="true"]')
    expect(bgImg).toHaveAttribute('src', 'https://picsum.photos/seed/griddle-video/1920/600')
  })
})
