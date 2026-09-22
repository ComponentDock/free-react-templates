import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { describe, expect, it } from 'vitest'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('World Class Accommodation')
  })

  it('renders the subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover a hotel that defines/)).toBeInTheDocument()
  })

  it('renders the View More CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('View More')).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<Hero />)
    expect(screen.getByAltText('Luxurious hotel room with warm lighting')).toBeInTheDocument()
  })
})
