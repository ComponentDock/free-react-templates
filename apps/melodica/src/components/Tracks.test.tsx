import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Tracks } from './Tracks'

describe('Tracks', () => {
  it('renders the tracks heading', () => {
    render(<Tracks />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Latest Releases')
    expect(screen.getByText('Featured Tracks')).toBeInTheDocument()
  })

  it('renders six track cards', () => {
    render(<Tracks />)

    const trackTitles = ['Midnight Echo', 'Neon Dreams', 'Pulse', 'Horizon', 'Velocity', 'Ember']

    for (const title of trackTitles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders play buttons for each track', () => {
    render(<Tracks />)

    const playButtons = screen.getAllByRole('button', { name: /^play /i })
    expect(playButtons).toHaveLength(6)
  })

  it('renders like buttons for each track', () => {
    render(<Tracks />)

    const likeButtons = screen.getAllByRole('button', { name: /^like /i })
    expect(likeButtons).toHaveLength(6)
  })

  it('renders track durations', () => {
    render(<Tracks />)

    expect(screen.getByText('3:42')).toBeInTheDocument()
    expect(screen.getByText('4:15')).toBeInTheDocument()
    expect(screen.getByText('3:58')).toBeInTheDocument()
  })

  it('renders album art images', () => {
    render(<Tracks />)

    const images = screen.getAllByRole('img', { name: /album art/i })
    expect(images).toHaveLength(6)
  })
})
