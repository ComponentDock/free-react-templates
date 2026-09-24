import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroCarousel } from './HeroCarousel'

describe('HeroCarousel', () => {
  it('renders 3 hero slides', () => {
    render(<HeroCarousel />)
    const slides = screen.getAllByRole('button', { name: /Play/i })
    expect(slides).toHaveLength(3)
  })

  it('displays slide titles', () => {
    render(<HeroCarousel />)
    expect(screen.getByText(/Discover The World/)).toBeInTheDocument()
    expect(screen.getByText(/Modern Living Trends/)).toBeInTheDocument()
    expect(screen.getByText(/Global Resorts Network/)).toBeInTheDocument()
  })

  it('displays category badges', () => {
    render(<HeroCarousel />)
    expect(screen.getByText('Travel')).toBeInTheDocument()
    expect(screen.getByText('Lifestyle')).toBeInTheDocument()
    expect(screen.getByText('Culture')).toBeInTheDocument()
  })

  it('renders play buttons with accessible labels', () => {
    render(<HeroCarousel />)
    expect(
      screen.getByLabelText("Play Discover The World's Most Beautiful Destinations"),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Play A Closer Look At Modern Living Trends')).toBeInTheDocument()
    expect(
      screen.getByLabelText('Play Global Resorts Network Changing The Game'),
    ).toBeInTheDocument()
  })
})
