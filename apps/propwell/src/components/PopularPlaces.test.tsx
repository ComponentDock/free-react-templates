import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularPlaces } from './PopularPlaces'

describe('PopularPlaces', () => {
  it('renders the section heading', () => {
    render(<PopularPlaces />)

    expect(screen.getByText('Popular Places')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<PopularPlaces />)

    expect(screen.getByText(/Explore properties in popular/)).toBeInTheDocument()
  })

  it('renders all 4 places', () => {
    render(<PopularPlaces />)

    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByText('Florida')).toBeInTheDocument()
    expect(screen.getByText('San Jose')).toBeInTheDocument()
    expect(screen.getByText('St Louis')).toBeInTheDocument()
  })

  it('displays property counts', () => {
    render(<PopularPlaces />)

    expect(screen.getByText('120 Properties')).toBeInTheDocument()
    expect(screen.getByText('85 Properties')).toBeInTheDocument()
    expect(screen.getByText('42 Properties')).toBeInTheDocument()
    expect(screen.getByText('64 Properties')).toBeInTheDocument()
  })

  it('has an aria-label', () => {
    render(<PopularPlaces />)

    expect(screen.getByLabelText('Popular places')).toBeInTheDocument()
  })
})
