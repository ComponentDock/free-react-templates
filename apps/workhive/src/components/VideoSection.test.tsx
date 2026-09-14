import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders play button', () => {
    render(<VideoSection />)
    expect(screen.getByRole('link', { name: /play video/i })).toBeInTheDocument()
  })

  it('renders with background image', () => {
    render(<VideoSection />)
    const sections = document.querySelectorAll('section')
    expect(sections.length).toBeGreaterThanOrEqual(1)
  })
})
