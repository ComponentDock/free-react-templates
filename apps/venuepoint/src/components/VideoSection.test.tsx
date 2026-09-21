import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders the title text', () => {
    render(<VideoSection />)
    expect(screen.getByText('Food for the soul')).toBeInTheDocument()
  })

  it('renders a play button linking to Vimeo', () => {
    render(<VideoSection />)
    const link = screen.getByRole('link', { name: /play video/i })
    expect(link).toHaveAttribute(
      'href',
      'https://player.vimeo.com/video/99340873?autoplay=1&loop=1&title=0',
    )
    expect(link).toHaveAttribute('target', '_blank')
  })
})
