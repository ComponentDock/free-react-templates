import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MapSection } from './MapSection'

describe('MapSection', () => {
  it('renders the section title and location radio options', () => {
    render(<MapSection />)
    expect(screen.getByRole('heading', { name: /Choose a Location/i })).toBeInTheDocument()
    expect(screen.getByText(/Explore/i)).toBeInTheDocument()
  })

  it('renders radio inputs for all locations', () => {
    render(<MapSection />)
    expect(screen.getByRole('radio', { name: /New York/ })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: /San Francisco/ })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: /Los Angeles/ })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: /Chicago/ })).toBeInTheDocument()
  })

  it('shows listing counts for each location', () => {
    render(<MapSection />)
    expect(screen.getByText('(12 listings)')).toBeInTheDocument()
    expect(screen.getByText('(8 listings)')).toBeInTheDocument()
    expect(screen.getByText('(15 listings)')).toBeInTheDocument()
    expect(screen.getByText('(6 listings)')).toBeInTheDocument()
  })
})
