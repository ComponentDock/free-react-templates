import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LineupHeadliners } from './LineupHeadliners'

describe('LineupHeadliners', () => {
  it('renders section heading', () => {
    render(<LineupHeadliners />)
    expect(screen.getByText('The Lineup Artists-Headliners')).toBeInTheDocument()
    expect(screen.getByText('Just the best')).toBeInTheDocument()
  })

  it('renders all headliner artists', () => {
    render(<LineupHeadliners />)
    expect(screen.getByText('Aurora Waves')).toBeInTheDocument()
    expect(screen.getByText('Neon Dusk')).toBeInTheDocument()
    expect(screen.getByText('Velvet Echo')).toBeInTheDocument()
  })

  it('renders artist bios', () => {
    render(<LineupHeadliners />)
    expect(screen.getByText(/Electronic music producer/)).toBeInTheDocument()
    expect(screen.getByText(/Alternative rock band/)).toBeInTheDocument()
    expect(screen.getByText(/Neo-soul vocalist/)).toBeInTheDocument()
  })

  it('renders view profile links', () => {
    render(<LineupHeadliners />)
    const links = screen.getAllByText('View profile')
    expect(links.length).toBe(3)
  })

  it('renders artist images', () => {
    render(<LineupHeadliners />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
