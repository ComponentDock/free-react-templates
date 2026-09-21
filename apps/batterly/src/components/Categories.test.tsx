import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders all five category names', () => {
    render(<Categories />)
    expect(screen.getByText('Cupcake')).toBeInTheDocument()
    expect(screen.getByText('Butter')).toBeInTheDocument()
    expect(screen.getByText('Red Velvet')).toBeInTheDocument()
    expect(screen.getByText('Biscuit')).toBeInTheDocument()
    expect(screen.getByText('Donut')).toBeInTheDocument()
  })

  it('renders category icon emojis', () => {
    render(<Categories />)
    expect(screen.getByText('🧁')).toBeInTheDocument()
    expect(screen.getByText('🧈')).toBeInTheDocument()
    expect(screen.getByText('🎂')).toBeInTheDocument()
    expect(screen.getByText('🍪')).toBeInTheDocument()
    expect(screen.getByText('🍩')).toBeInTheDocument()
  })

  it('renders at least 5 category items', () => {
    render(<Categories />)
    const items = screen.getAllByText(/Cupcake|Butter|Red Velvet|Biscuit|Donut/)
    expect(items.length).toBeGreaterThanOrEqual(5)
  })
})
