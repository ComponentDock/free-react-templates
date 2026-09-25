import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Video } from './Video'

describe('Video', () => {
  it('renders the section heading and subtitle', () => {
    render(<Video />)

    expect(screen.getByText('Our Videos')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /newest albums/ })).toBeInTheDocument()
  })

  it('renders the video player with play button', () => {
    render(<Video />)

    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
    // Maroon 5 title appears in both the video area and playlist
    const maroon5 = screen.getAllByText(/Maroon 5/)
    expect(maroon5.length).toBeGreaterThanOrEqual(1)
  })

  it('renders playback controls', () => {
    render(<Video />)

    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Volume' })).toBeInTheDocument()
  })

  it('renders the playlist sidebar with tracks', () => {
    render(<Video />)

    expect(screen.getByText('Playlist')).toBeInTheDocument()
    // Use exact text for playlist items to avoid matching the video title
    expect(screen.getByText('Sweet But Psycho — Ava Max')).toBeInTheDocument()
    expect(screen.getByText('Natural — Imagine Dragons')).toBeInTheDocument()
    expect(screen.getByText('Bad Guy — Billie Eilish')).toBeInTheDocument()
    // Maroon 5 appears in both video title and playlist — check at least 2
    const maroon5 = screen.getAllByText(/Maroon 5/)
    expect(maroon5.length).toBeGreaterThanOrEqual(2)
  })
})
