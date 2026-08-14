import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, intro line, and a styled live audio player', () => {
    const { container } = render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Listen — On-Air Now' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/tune in around the clock/i)).toBeInTheDocument()

    const audio = container.querySelector('audio')
    expect(audio).toBeInTheDocument()
    expect(audio).toHaveAttribute('controls')
    expect(audio).toHaveClass('hero-audio-player')
    expect(audio?.querySelector('source')).toHaveAttribute('type', 'audio/mpeg')
  })
})
