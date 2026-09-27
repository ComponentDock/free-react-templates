import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CitiesGrid } from './CitiesGrid'

describe('CitiesGrid', () => {
  it('renders the section heading', () => {
    render(<CitiesGrid />)
    expect(screen.getByText('Find properties in these cities')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<CitiesGrid />)
    expect(screen.getByText('Search your dream home')).toBeInTheDocument()
  })

  it('displays all 8 city cards', () => {
    render(<CitiesGrid />)
    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByText('Los Angeles')).toBeInTheDocument()
    expect(screen.getByText('Chicago')).toBeInTheDocument()
    expect(screen.getByText('Miami')).toBeInTheDocument()
    expect(screen.getByText('San Francisco')).toBeInTheDocument()
    expect(screen.getByText('Seattle')).toBeInTheDocument()
    expect(screen.getByText('Boston')).toBeInTheDocument()
    expect(screen.getByText('Denver')).toBeInTheDocument()
  })

  it('shows rental prices on city cards', () => {
    render(<CitiesGrid />)
    expect(screen.getByText(/Rentals from \$1,200\/month/)).toBeInTheDocument()
    expect(screen.getByText(/Rentals from \$1,500\/month/)).toBeInTheDocument()
  })

  it('has images with alt text for each city', () => {
    render(<CitiesGrid />)
    expect(screen.getByAltText('New York')).toBeInTheDocument()
    expect(screen.getByAltText('Denver')).toBeInTheDocument()
  })
})
