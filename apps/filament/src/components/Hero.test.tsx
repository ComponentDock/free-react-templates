import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Brand new Filament/i })).toBeInTheDocument()
  })

  it('renders the subtitle paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/beautifully crafted feminine landing page/i)).toBeInTheDocument()
  })

  it('renders the Explore Now button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Explore Now' })).toBeInTheDocument()
  })

  it('has gradient overlay', () => {
    render(<Hero />)
    const section = screen.getByRole('region', { name: /hero banner/i })
    expect(section).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Hero className="custom-class" />)
    expect(screen.getByRole('region', { name: /hero banner/i })).toHaveClass('custom-class')
  })
})
