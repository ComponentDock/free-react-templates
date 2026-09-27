import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Properties } from './Properties'

describe('Properties', () => {
  it('renders the section heading', () => {
    render(<Properties />)
    expect(screen.getByText(/properties in various cities/i)).toBeInTheDocument()
  })

  it('renders property cards with details', () => {
    render(<Properties />)
    expect(screen.getByText('04 Bed Duplex')).toBeInTheDocument()
    expect(screen.getByText('$3.5M')).toBeInTheDocument()
    expect(screen.getByText('Bed: 4')).toBeInTheDocument()
    expect(screen.getByText('Bath: 3')).toBeInTheDocument()
    expect(screen.getByText('Area: 750sqm')).toBeInTheDocument()
  })

  it('renders badges', () => {
    render(<Properties />)
    expect(screen.getAllByText('For Sale')).toHaveLength(2)
    expect(screen.getByText('For Rent')).toBeInTheDocument()
  })
})
