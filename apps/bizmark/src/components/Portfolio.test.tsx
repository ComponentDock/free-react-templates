import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders quote card with Explore Our Best Practice Area', () => {
    render(<Portfolio />)
    expect(
      screen.getByRole('heading', { level: 2, name: /explore our best practice area/i }),
    ).toBeInTheDocument()
  })

  it('renders four project cards', () => {
    render(<Portfolio />)
    const projectCards = screen.getAllByText('Startup Project')
    expect(projectCards.length).toBe(4)
  })

  it('renders project images', () => {
    render(<Portfolio />)
    const images = screen.getAllByAltText('Startup Project')
    expect(images.length).toBe(4)
  })
})
