import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import News from './News'

describe('News', () => {
  it('renders the heading', () => {
    render(<News />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders 3 news cards', () => {
    render(<News />)
    const cards = screen.getAllByTestId('news-card')
    expect(cards).toHaveLength(3)
  })

  it('renders news titles', () => {
    render(<News />)
    expect(screen.getByText('Music Seminary at Festival')).toBeInTheDocument()
    expect(screen.getByText('Festival List for 2025')).toBeInTheDocument()
    expect(screen.getByText('New Album Release in 2025')).toBeInTheDocument()
  })

  it('renders news dates', () => {
    render(<News />)
    expect(screen.getByText('Oct 19, 2024')).toBeInTheDocument()
    expect(screen.getByText('Oct 17, 2024')).toBeInTheDocument()
    expect(screen.getByText('Oct 15, 2024')).toBeInTheDocument()
  })

  it('renders news excerpts', () => {
    render(<News />)
    expect(screen.getByText(/Join us for an immersive workshop/)).toBeInTheDocument()
  })
})
