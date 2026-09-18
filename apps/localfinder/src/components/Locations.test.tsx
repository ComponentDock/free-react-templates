import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Locations } from './Locations'

describe('Locations', () => {
  it('renders heading', () => {
    render(<Locations />)
    expect(screen.getByText('Featured Locations')).toBeInTheDocument()
  })

  it('renders all 4 location cards', () => {
    render(<Locations />)
    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByText('Los Angeles')).toBeInTheDocument()
    expect(screen.getByText('Chicago')).toBeInTheDocument()
    expect(screen.getByText('Miami')).toBeInTheDocument()
  })

  it('shows listing counts', () => {
    render(<Locations />)
    expect(screen.getByText('2,840 Listings')).toBeInTheDocument()
    expect(screen.getByText('1,925 Listings')).toBeInTheDocument()
    expect(screen.getByText('1,430 Listings')).toBeInTheDocument()
    expect(screen.getByText('980 Listings')).toBeInTheDocument()
  })
})
