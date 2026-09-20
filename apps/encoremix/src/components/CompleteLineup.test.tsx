import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CompleteLineup } from './CompleteLineup'

describe('CompleteLineup', () => {
  it('renders section heading', () => {
    render(<CompleteLineup />)
    expect(screen.getByText('The Complete Lineup')).toBeInTheDocument()
  })

  it('renders all 8 artists', () => {
    render(<CompleteLineup />)
    const artists = [
      'Solar Flare',
      'Crimson Tide',
      'Phantom Groove',
      'Drift Mode',
      'Midnight Run',
      'Echo Chamber',
      'Static Bloom',
      'Waveform',
    ]
    for (const name of artists) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders artist images', () => {
    render(<CompleteLineup />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(8)
  })

  it('renders see all lineup button', () => {
    render(<CompleteLineup />)
    expect(screen.getByText('See all lineup')).toBeInTheDocument()
  })
})
