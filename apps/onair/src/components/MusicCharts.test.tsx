import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MusicCharts } from './MusicCharts'

describe('MusicCharts', () => {
  it('renders the Music Chart heading', () => {
    render(<MusicCharts />)
    expect(screen.getByRole('heading', { level: 2, name: /Music Chart/ })).toBeInTheDocument()
  })

  it('renders the Show All button', () => {
    render(<MusicCharts />)
    expect(screen.getByRole('link', { name: /Show All Trending/ })).toBeInTheDocument()
  })

  it('renders all track titles', () => {
    render(<MusicCharts />)
    expect(screen.getByText(/Way Back Home/)).toBeInTheDocument()
    expect(screen.getByText(/Goodbye & Good Riddance/)).toBeInTheDocument()
    expect(screen.getByText(/The Greatest Showman/)).toBeInTheDocument()
    expect(screen.getByText(/Mamma Mia!/)).toBeInTheDocument()
  })

  it('renders price buttons for each track', () => {
    render(<MusicCharts />)
    expect(screen.getByRole('link', { name: '$12.99' })).toBeInTheDocument()
    // There are 3 tracks at $10.99
    const priceButtons = screen.getAllByRole('link', { name: '$10.99' })
    expect(priceButtons).toHaveLength(3)
  })
})
