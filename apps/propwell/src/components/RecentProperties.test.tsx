import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecentProperties } from './RecentProperties'

describe('RecentProperties', () => {
  it('renders the section heading', () => {
    render(<RecentProperties />)

    expect(screen.getByText('Recent Properties')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<RecentProperties />)

    expect(screen.getByText(/Latest properties available/)).toBeInTheDocument()
  })

  it('renders all 4 property cards', () => {
    render(<RecentProperties />)

    expect(screen.getAllByText('Sale').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('Rent').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('24 Fifth Ave, New York')).toBeInTheDocument()
    expect(screen.getByText('101 St. John St, New York')).toBeInTheDocument()
    expect(screen.getByText('856 Main Street, Chicago')).toBeInTheDocument()
    expect(screen.getByText('34 Oak Avenue, Houston')).toBeInTheDocument()
  })

  it('displays prices for all properties', () => {
    render(<RecentProperties />)

    expect(screen.getByText('$450,000')).toBeInTheDocument()
    expect(screen.getByText('$2,500/mo')).toBeInTheDocument()
    expect(screen.getByText('$320,000')).toBeInTheDocument()
    expect(screen.getByText('$1,800/mo')).toBeInTheDocument()
  })

  it('has an aria-label', () => {
    render(<RecentProperties />)

    expect(screen.getByLabelText('Recent properties')).toBeInTheDocument()
  })
})
