import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PopularLocations } from './PopularLocations'
import { popularLocations } from '../data'

describe('PopularLocations', () => {
  it('renders the section heading', () => {
    render(<PopularLocations />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Popular Locations')
  })

  it('renders the script subheading', () => {
    render(<PopularLocations />)
    expect(screen.getByText('Most visited places')).toBeInTheDocument()
  })

  it('renders all location cards', () => {
    render(<PopularLocations />)
    for (const loc of popularLocations) {
      expect(screen.getByText(loc.name)).toBeInTheDocument()
      expect(screen.getByAltText(`${loc.name} cityscape`)).toHaveAttribute('src', loc.image)
    }
  })

  it('renders exactly 3 location cards', () => {
    render(<PopularLocations />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })
})
