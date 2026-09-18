import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TrendingToday } from './TrendingToday'

describe('TrendingToday', () => {
  it('renders the heading', () => {
    render(<TrendingToday />)
    expect(screen.getByRole('heading', { name: 'Trending Today' })).toBeInTheDocument()
  })

  it('renders listing cards', () => {
    render(<TrendingToday />)
    expect(screen.getByText('Own New House')).toBeInTheDocument()
    expect(screen.getByText('New Black Car')).toBeInTheDocument()
  })
})
