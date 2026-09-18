import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Corporate Collaboration')).toBeInTheDocument()
    expect(screen.getByText('Strategic Partners')).toBeInTheDocument()
    expect(screen.getByText('Infinite Posibilities')).toBeInTheDocument()
  })

  it('renders Learn More links for each card', () => {
    render(<Features />)
    const links = screen.getAllByText('Learn More')
    expect(links).toHaveLength(3)
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getAllByText(/A small river named Duden/)).toHaveLength(3)
  })

  it('renders icons', () => {
    render(<Features />)
    const svgs = document.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(3)
  })
})
