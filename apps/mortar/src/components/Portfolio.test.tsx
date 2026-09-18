import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading and all 3 project titles', () => {
    render(<Portfolio />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Portfolio' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Brand Identity — Luxe Hotels' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'eCommerce Platform — Artisan Market' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Mobile App — FitTrack Pro' }),
    ).toBeInTheDocument()
  })

  it('shows project images and testimonials', () => {
    render(<Portfolio />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)

    expect(screen.getByText(/complete brand overhaul/)).toBeInTheDocument()
    expect(screen.getByText(/custom-built eCommerce/)).toBeInTheDocument()
    expect(screen.getByText(/fitness tracking mobile/)).toBeInTheDocument()

    expect(screen.getByText(/brand identity that truly/)).toBeInTheDocument()
    expect(screen.getByText(/online sales increased/)).toBeInTheDocument()
    expect(screen.getByText(/turned our concept into/)).toBeInTheDocument()
  })
})
