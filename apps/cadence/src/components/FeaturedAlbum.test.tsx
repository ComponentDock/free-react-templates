import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedAlbum } from './FeaturedAlbum'

describe('FeaturedAlbum', () => {
  it('renders the album title', () => {
    render(<FeaturedAlbum />)
    expect(screen.getByRole('heading', { name: /Love is all Around/i })).toBeInTheDocument()
  })

  it('renders the featured album label', () => {
    render(<FeaturedAlbum />)
    expect(screen.getByText('Featured Album')).toBeInTheDocument()
  })

  it('renders all songs in the playlist', () => {
    render(<FeaturedAlbum />)
    const songs = screen.getAllByText(
      /Drop that beat|Hey, Mister DJ|Message to my future self|Bring back the love/,
    )
    expect(songs.length).toBeGreaterThanOrEqual(8)
  })

  it('renders the buy button', () => {
    render(<FeaturedAlbum />)
    expect(screen.getByRole('link', { name: /buy on itunes/i })).toBeInTheDocument()
  })

  it('renders the now playing bar', () => {
    render(<FeaturedAlbum />)
    expect(screen.getByText('Playing')).toBeInTheDocument()
  })

  it('renders play buttons for songs', () => {
    render(<FeaturedAlbum />)
    const playButtons = screen.getAllByRole('button', { name: /play/i })
    expect(playButtons.length).toBeGreaterThanOrEqual(7)
  })
})
