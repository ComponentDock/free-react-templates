import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedProperties } from './FeaturedProperties'

describe('FeaturedProperties', () => {
  it('renders the section heading', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText(/Top New In/)).toBeInTheDocument()
  })

  it('renders all 6 property cards', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('7660 Nikolaus Burg')).toBeInTheDocument()
    expect(screen.getByText('736 Hauck Alley')).toBeInTheDocument()
    expect(screen.getByText('170 Center Park')).toBeInTheDocument()
    expect(screen.getByText('58 Treutel Shores')).toBeInTheDocument()
    expect(screen.getByText('8332 Ramiro Village')).toBeInTheDocument()
    expect(screen.getByText('221 Leann Suite 473')).toBeInTheDocument()
  })

  it('displays property info for each card', () => {
    render(<FeaturedProperties />)
    expect(screen.getAllByText('Alex Cross').length).toBe(6)
    expect(screen.getAllByText('1420 m2').length).toBe(6)
  })

  it('shows For Rent and For Sale badges', () => {
    render(<FeaturedProperties />)
    const rentBadges = screen.getAllByText('For Rent')
    const saleBadges = screen.getAllByText('For Sale')
    expect(rentBadges.length).toBe(3)
    expect(saleBadges.length).toBe(3)
  })

  it('displays prices', () => {
    render(<FeaturedProperties />)
    expect(screen.getAllByText('$1,599/month').length).toBe(3)
    expect(screen.getAllByText('$2,120,000').length).toBe(3)
  })
})
