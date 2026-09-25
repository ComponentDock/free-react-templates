import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MusicArtistsSearch } from './MusicArtistsSearch'

describe('MusicArtistsSearch', () => {
  it('renders the Music heading', () => {
    render(<MusicArtistsSearch />)
    expect(screen.getByRole('heading', { name: /^Music$/i })).toBeInTheDocument()
  })

  it('renders the Artists heading', () => {
    render(<MusicArtistsSearch />)
    expect(screen.getByRole('heading', { name: /^Artists$/i })).toBeInTheDocument()
  })

  it('renders search descriptions', () => {
    render(<MusicArtistsSearch />)
    expect(screen.getByText('Search for the best music')).toBeInTheDocument()
    expect(screen.getByText('Search for the best artists')).toBeInTheDocument()
  })

  it('has background images for both panels', () => {
    render(<MusicArtistsSearch />)
    const bgs = document.querySelectorAll('[style*="background-image"]')
    expect(bgs.length).toBe(2)
  })
})
