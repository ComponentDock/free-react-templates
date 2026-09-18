import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Song from './Song'

describe('Song', () => {
  it('renders the song of the week heading', () => {
    render(<Song />)
    expect(screen.getByText('Song of the Week')).toBeInTheDocument()
  })

  it('renders album art image', () => {
    render(<Song />)
    expect(screen.getByAltText('Album art')).toBeInTheDocument()
  })

  it('renders play button', () => {
    render(<Song />)
    expect(screen.getByTestId('play-button')).toBeInTheDocument()
  })

  it('toggles play/pause on click', async () => {
    const user = userEvent.setup()
    render(<Song />)
    const playBtn = screen.getByTestId('play-button')
    expect(playBtn).toHaveAttribute('aria-label', 'Play')
    await user.click(playBtn)
    expect(playBtn).toHaveAttribute('aria-label', 'Pause')
    await user.click(playBtn)
    expect(playBtn).toHaveAttribute('aria-label', 'Play')
  })

  it('renders artist name', () => {
    render(<Song />)
    expect(screen.getByText('The Midnight Echo')).toBeInTheDocument()
  })

  it('renders mute button', () => {
    render(<Song />)
    expect(screen.getByTestId('mute-button')).toBeInTheDocument()
  })

  it('toggles mute on click', async () => {
    const user = userEvent.setup()
    render(<Song />)
    const muteBtn = screen.getByTestId('mute-button')
    expect(muteBtn).toHaveAttribute('aria-label', 'Mute')
    await user.click(muteBtn)
    expect(muteBtn).toHaveAttribute('aria-label', 'Unmute')
    await user.click(muteBtn)
    expect(muteBtn).toHaveAttribute('aria-label', 'Mute')
  })

  it('renders volume slider', () => {
    render(<Song />)
    expect(screen.getByRole('slider', { name: 'Volume' })).toBeInTheDocument()
  })
})
