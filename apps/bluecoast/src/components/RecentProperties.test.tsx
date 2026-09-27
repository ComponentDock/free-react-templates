import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { RecentProperties } from './RecentProperties'

describe('RecentProperties', () => {
  it('renders the section heading', () => {
    render(<RecentProperties />)
    expect(screen.getByText('Recent Properties')).toBeInTheDocument()
  })

  it('displays 3 property cards', () => {
    render(<RecentProperties />)
    expect(screen.getByText('New York, NY')).toBeInTheDocument()
    expect(screen.getByText('Los Angeles, CA')).toBeInTheDocument()
    expect(screen.getByText('Chicago, IL')).toBeInTheDocument()
  })

  it('shows prices on property cards', () => {
    render(<RecentProperties />)
    expect(screen.getByText('$2,500')).toBeInTheDocument()
    expect(screen.getByText('$3,800')).toBeInTheDocument()
    expect(screen.getByText('$1,900')).toBeInTheDocument()
  })

  it('shows property features', () => {
    render(<RecentProperties />)
    expect(screen.getAllByText(/Beds/)).toHaveLength(3)
    expect(screen.getAllByText(/Baths/)).toHaveLength(3)
  })

  it('displays "For rent" labels', () => {
    render(<RecentProperties />)
    const labels = screen.getAllByText('For rent')
    expect(labels.length).toBe(3)
  })

  it('renders property images with alt text', () => {
    render(<RecentProperties />)
    expect(screen.getByAltText('New York, NY')).toBeInTheDocument()
    expect(screen.getByAltText('Los Angeles, CA')).toBeInTheDocument()
    expect(screen.getByAltText('Chicago, IL')).toBeInTheDocument()
  })
})
