import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecentGames } from './RecentGames'

describe('RecentGames', () => {
  it('renders section heading', () => {
    render(<RecentGames />)
    expect(screen.getByRole('heading', { name: 'Recent Games' })).toBeInTheDocument()
  })

  it('renders 3 game cards', () => {
    render(<RecentGames />)
    expect(screen.getByText('Stellar Odyssey')).toBeInTheDocument()
    expect(screen.getByText('Turbo Drift Legends')).toBeInTheDocument()
    expect(screen.getByText('Wilderness Protocol')).toBeInTheDocument()
  })

  it('renders badges on game cards', () => {
    render(<RecentGames />)
    expect(screen.getByText('New')).toBeInTheDocument()
    expect(screen.getByText('Racing')).toBeInTheDocument()
    expect(screen.getByText('Adventure')).toBeInTheDocument()
  })

  it('renders game descriptions', () => {
    render(<RecentGames />)
    expect(screen.getByText(/breathtaking space exploration/)).toBeInTheDocument()
    expect(screen.getByText(/Master the art of drifting/)).toBeInTheDocument()
    expect(screen.getByText(/Survive the untamed frontier/)).toBeInTheDocument()
  })
})
