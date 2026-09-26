import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Photography/)
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Capturing moments/)).toBeInTheDocument()
  })

  it('renders the slide number and title', () => {
    render(<Hero />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('Travel Pro')).toBeInTheDocument()
  })

  it('renders the slide description', () => {
    render(<Hero />)
    expect(screen.getByText(/Etiam tristique/)).toBeInTheDocument()
  })

  it('renders dot navigation', () => {
    render(<Hero />)
    const dots = document.querySelectorAll('.rounded-full')
    expect(dots.length).toBeGreaterThanOrEqual(3)
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const img = screen.getByAltText('Photography hero')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('filmvault-hero'))
  })
})
