import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedArtist } from './FeaturedArtist'

describe('FeaturedArtist', () => {
  it('renders the section heading', () => {
    render(<FeaturedArtist />)
    expect(screen.getByRole('heading', { name: /buy what/i })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<FeaturedArtist />)
    expect(screen.getByText('Featured Artist')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<FeaturedArtist />)
    expect(screen.getByText(/discover the hottest tracks/i)).toBeInTheDocument()
  })

  it('renders the song name', () => {
    render(<FeaturedArtist />)
    expect(screen.getByText(/main hit song/i)).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<FeaturedArtist />)
    expect(screen.getByRole('button', { name: /play main hit song/i })).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<FeaturedArtist />)
    const section = document.querySelector('[style*="background-image"]')
    expect(section).toBeTruthy()
  })
})
