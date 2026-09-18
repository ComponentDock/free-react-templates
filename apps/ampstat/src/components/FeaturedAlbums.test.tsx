import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FeaturedAlbums from './FeaturedAlbums'

describe('FeaturedAlbums', () => {
  it('renders the heading', () => {
    render(<FeaturedAlbums />)
    expect(screen.getByText('Featured Albums')).toBeInTheDocument()
  })

  it('renders album items', () => {
    render(<FeaturedAlbums />)
    const albums = screen.getAllByTestId('album-item')
    expect(albums).toHaveLength(3)
  })

  it('renders album titles', () => {
    render(<FeaturedAlbums />)
    expect(screen.getByText('Midnight Echoes')).toBeInTheDocument()
    expect(screen.getByText('Neon Horizons')).toBeInTheDocument()
    expect(screen.getByText('Acoustic Sessions')).toBeInTheDocument()
  })

  it('renders play buttons for each album', () => {
    render(<FeaturedAlbums />)
    const playButtons = screen.getAllByTestId('album-play')
    expect(playButtons).toHaveLength(3)
  })

  it('toggles play on album click', async () => {
    const user = userEvent.setup()
    render(<FeaturedAlbums />)
    const playButton = screen.getAllByTestId('album-play')[0]!
    await user.click(playButton)
    expect(playButton).toHaveAttribute('aria-label', 'Pause Midnight Echoes')
    await user.click(playButton)
    expect(playButton).toHaveAttribute('aria-label', 'Play Midnight Echoes')
  })
})
