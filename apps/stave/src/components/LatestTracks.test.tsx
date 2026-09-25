import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestTracks } from './LatestTracks'

describe('LatestTracks', () => {
  it('renders the heading', () => {
    render(<LatestTracks />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Latest Tracks')
  })

  it('renders 3 track items', () => {
    render(<LatestTracks />)
    expect(screen.getByRole('heading', { name: 'Midnight Echoes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Rhythm of the Night' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Velvet Skies' })).toBeInTheDocument()
  })

  it('shows dates for each track', () => {
    render(<LatestTracks />)
    expect(screen.getByText('March 15, 2024')).toBeInTheDocument()
    expect(screen.getByText('February 28, 2024')).toBeInTheDocument()
    expect(screen.getByText('January 10, 2024')).toBeInTheDocument()
  })

  it('renders play buttons for each track', () => {
    render(<LatestTracks />)
    expect(screen.getByRole('button', { name: 'Play Midnight Echoes' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play Rhythm of the Night' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play Velvet Skies' })).toBeInTheDocument()
  })

  it('renders Buy buttons for each track', () => {
    render(<LatestTracks />)
    const buyButtons = screen.getAllByRole('button', { name: 'Buy' })
    expect(buyButtons).toHaveLength(3)
  })

  it('has the tracks section with correct id', () => {
    render(<LatestTracks />)
    expect(document.getElementById('tracks')).toBeInTheDocument()
  })
})
