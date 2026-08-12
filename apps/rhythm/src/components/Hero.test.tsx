import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { heroBlurb, heroVideoUrl } from '../data'

describe('Hero', () => {
  it('renders the eyebrow, headline, blurb, play button and bottom chevron', () => {
    render(<Hero />)

    expect(screen.getByText('New single')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/Feel the heart beats/)
    expect(screen.getByText(heroBlurb)).toBeInTheDocument()

    const playButton = screen.getByRole('link', { name: 'Watch the latest music video' })
    expect(playButton).toHaveAttribute('href', heroVideoUrl)
    expect(playButton).toHaveAttribute('target', '_blank')

    expect(screen.getByRole('link', { name: 'Scroll to upcoming events' })).toHaveAttribute(
      'href',
      '#events',
    )
  })
})
