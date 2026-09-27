import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders all 5 category cards', () => {
    render(<Categories />)
    expect(screen.getByText('Apartment')).toBeInTheDocument()
    expect(screen.getByText('Villa')).toBeInTheDocument()
    expect(screen.getByText('House')).toBeInTheDocument()
    expect(screen.getByText('Restaurant')).toBeInTheDocument()
    expect(screen.getByText('Office')).toBeInTheDocument()
  })

  it('renders property counts', () => {
    render(<Categories />)
    expect(screen.getByText('124 Properties')).toBeInTheDocument()
    expect(screen.getByText('56 Properties')).toBeInTheDocument()
    expect(screen.getByText('89 Properties')).toBeInTheDocument()
    expect(screen.getByText('32 Properties')).toBeInTheDocument()
    expect(screen.getByText('67 Properties')).toBeInTheDocument()
  })
})
