import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { HERO_HEADLINE, WATCH_VIDEO_LABEL } from '../data'

describe('Hero', () => {
  it('renders the headline, paragraph, and video-play button', () => {
    const { container } = render(<Hero />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe(HERO_HEADLINE)
    expect(screen.getByText(/Join a thriving community/i)).toBeInTheDocument()
    expect(screen.getByText(WATCH_VIDEO_LABEL)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
    expect(container.querySelector('svg')).not.toBeNull()
  })

  it('has a dark background section with the game artwork', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).not.toBeNull()
    expect(section?.className).toContain('bg-purple-deep')
    const art = container.querySelector('[aria-label="Isometric game art"]')
    expect(art).not.toBeNull()
  })
})
