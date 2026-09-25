import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TrendingVideo } from './TrendingVideo'

describe('TrendingVideo', () => {
  it('renders the Trending Video heading', () => {
    render(<TrendingVideo />)
    expect(screen.getByRole('heading', { level: 2, name: /Trending Video/ })).toBeInTheDocument()
  })

  it('renders video post titles', () => {
    render(<TrendingVideo />)
    expect(screen.getByText(/Epileptic boy's cannabis/)).toBeInTheDocument()
    expect(screen.getByText(/Ben Affleck completes/)).toBeInTheDocument()
    expect(screen.getByText(/Boaters have close call/)).toBeInTheDocument()
    expect(screen.getByText(/World leaders gather/)).toBeInTheDocument()
    expect(screen.getByText(/New restaurant opens/)).toBeInTheDocument()
    expect(screen.getByText(/Space agency announces/)).toBeInTheDocument()
  })
})
