import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MusicPlayer } from './MusicPlayer'

describe('MusicPlayer', () => {
  it('renders the section heading', () => {
    render(<MusicPlayer />)
    expect(screen.getByRole('heading', { name: /Now Playing/i })).toBeInTheDocument()
  })

  it('renders all track cards', () => {
    render(<MusicPlayer />)
    expect(screen.getByText('Drop that beat')).toBeInTheDocument()
    expect(screen.getByText('Hey, Mister DJ')).toBeInTheDocument()
    expect(screen.getByText('Message to my future self')).toBeInTheDocument()
    expect(screen.getByText('Bring back the love')).toBeInTheDocument()
  })

  it('renders play buttons with accessible labels', () => {
    render(<MusicPlayer />)
    expect(screen.getByRole('button', { name: /play drop that beat/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /play hey, mister dj/i })).toBeInTheDocument()
  })

  it('renders track images', () => {
    render(<MusicPlayer />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})
