import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Portfolio from './Portfolio'

describe('Portfolio', () => {
  it('renders 7 portfolio items', () => {
    render(<Portfolio />)
    const items = screen.getAllByRole('link')
    expect(items).toHaveLength(7)
  })

  it('displays portfolio item titles', () => {
    render(<Portfolio />)
    expect(screen.getByText('Summer in the Desert')).toBeInTheDocument()
    expect(screen.getByText('City Lights')).toBeInTheDocument()
    expect(screen.getByText('Night Skyline')).toBeInTheDocument()
  })

  it('displays portfolio categories', () => {
    render(<Portfolio />)
    expect(screen.getAllByText('Landscape Photography').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Urban Photography').length).toBeGreaterThanOrEqual(1)
  })
})
