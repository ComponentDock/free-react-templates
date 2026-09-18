import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders heading', () => {
    render(<Categories />)
    expect(screen.getByText('Most Popular Categories')).toBeInTheDocument()
  })

  it('renders all 5 category cards', () => {
    render(<Categories />)
    expect(screen.getByText('Food & Drink')).toBeInTheDocument()
    expect(screen.getByText('Restaurant')).toBeInTheDocument()
    expect(screen.getByText('Hotels')).toBeInTheDocument()
    expect(screen.getByText('Beauty & Spa')).toBeInTheDocument()
    expect(screen.getByText('Shopping')).toBeInTheDocument()
  })

  it('shows listing counts', () => {
    render(<Categories />)
    expect(screen.getByText('78 Listings')).toBeInTheDocument()
    expect(screen.getByText('32 Listings')).toBeInTheDocument()
    expect(screen.getByText('16 Listings')).toBeInTheDocument()
    expect(screen.getByText('55 Listings')).toBeInTheDocument()
    expect(screen.getByText('23 Listings')).toBeInTheDocument()
  })
})
