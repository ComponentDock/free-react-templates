import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Classy Rebel Fashion Photoshoot',
    )
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Capturing moments that last forever')).toBeInTheDocument()
  })

  it('renders the CTA button linking to gallery', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /view gallery/i })
    expect(cta).toHaveAttribute('href', '#gallery')
  })
})
