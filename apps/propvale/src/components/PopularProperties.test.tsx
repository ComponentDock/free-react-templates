import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularProperties } from './PopularProperties'

describe('PopularProperties', () => {
  it('renders the section heading and all 6 property cards', () => {
    render(<PopularProperties />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Popular Properties' }),
    ).toBeInTheDocument()

    expect(screen.getByText('Luxury Family Home')).toBeInTheDocument()
    expect(screen.getByText('Modern Apartment')).toBeInTheDocument()
    expect(screen.getByText('Beachfront Villa')).toBeInTheDocument()
    expect(screen.getByText('Cozy Studio')).toBeInTheDocument()
    expect(screen.getByText('Suburban Ranch')).toBeInTheDocument()
    expect(screen.getByText('Downtown Loft')).toBeInTheDocument()

    const saleTags = screen.getAllByText('For Sale')
    expect(saleTags.length).toBe(3)
    const rentTags = screen.getAllByText('For Rent')
    expect(rentTags.length).toBe(3)
  })
})
