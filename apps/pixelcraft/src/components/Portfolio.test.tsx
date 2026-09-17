import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section number and title', () => {
    render(<Portfolio />)
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
  })

  it('renders portfolio items with images and titles', () => {
    render(<Portfolio />)
    const titles = [
      'Creative Identity',
      'E-Commerce Platform',
      'Fitness Tracker App',
      'Event Poster Series',
      'Restaurant Rebrand',
      'Agency Portfolio',
    ]
    for (const title of titles) {
      expect(screen.getByRole('img', { name: title })).toBeInTheDocument()
    }
  })

  it('renders type labels for portfolio items', () => {
    render(<Portfolio />)
    const types = ['Branding', 'Web', 'Mobile', 'Graphic']
    for (const type of types) {
      expect(screen.getAllByText(type).length).toBeGreaterThanOrEqual(1)
    }
  })
})
