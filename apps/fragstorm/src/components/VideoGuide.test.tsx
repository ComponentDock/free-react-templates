import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoGuide } from './VideoGuide'

describe('VideoGuide', () => {
  it('renders the section title', () => {
    render(<VideoGuide />)
    expect(screen.getByText(/Video Guide/)).toBeInTheDocument()
  })

  it('renders video cards', () => {
    render(<VideoGuide />)
    expect(screen.getByText('How to Build the Perfect Gaming Setup')).toBeInTheDocument()
    expect(screen.getByText('Top 10 Tips for Battle Royale Winners')).toBeInTheDocument()
    expect(screen.getByText('Best Settings for Competitive FPS Gaming')).toBeInTheDocument()
  })

  it('has correct section id', () => {
    const { container } = render(<VideoGuide />)
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'videos')
  })
})
