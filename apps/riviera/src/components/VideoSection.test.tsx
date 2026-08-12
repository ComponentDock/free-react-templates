import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders the overlapping photo backgrounds', () => {
    render(<VideoSection />)
    expect(screen.getByRole('img', { name: /backdrop/i })).toHaveAttribute(
      'src',
      expect.stringContaining('riviera-4'),
    )
    expect(screen.getByRole('img', { name: /feature photo/i })).toHaveAttribute(
      'src',
      expect.stringContaining('riviera-5'),
    )
  })

  it('renders a focusable circular play button', () => {
    render(<VideoSection />)
    const play = screen.getByRole('link', { name: 'Play video' })
    expect(play).toHaveAttribute('href', '#')
  })
})
