import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading with brand name', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Cadence Cadence/i })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Music Theme')).toBeInTheDocument()
  })

  it('renders the scroll indicator', () => {
    render(<Hero />)
    expect(screen.getByText('Slide Down')).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<Hero />)
    const bg = document.querySelector('[style*="background-image"]')
    expect(bg).toBeInTheDocument()
  })

  it('has the watermark text', () => {
    render(<Hero />)
    const watermarks = screen.getAllByText('Cadence')
    expect(watermarks.length).toBeGreaterThanOrEqual(2)
  })
})
