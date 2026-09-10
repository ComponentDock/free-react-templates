import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VehicleCarousel } from './VehicleCarousel'

describe('VehicleCarousel', () => {
  it('renders the section heading', () => {
    render(<VehicleCarousel />)
    expect(screen.getByRole('heading', { name: 'Choose Your Car' })).toBeInTheDocument()
  })

  it('renders vehicle cards with names and prices', () => {
    render(<VehicleCarousel />)
    expect(screen.getByRole('heading', { name: 'Mercedes Grand Sedan' })).toBeInTheDocument()
    expect(screen.getByText('$45/day')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Toyota RAV4 SUV' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Honda Civic Hatch' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'BMW 5 Series' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Ford Mustang Coupe' })).toBeInTheDocument()
  })

  it('renders vehicle images', () => {
    render(<VehicleCarousel />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(5)
    const mercedesImg = images.find((img) => img.getAttribute('alt') === 'Mercedes Grand Sedan')
    expect(mercedesImg).toBeDefined()
  })

  it('renders feature lists', () => {
    render(<VehicleCarousel />)
    expect(screen.getAllByText('Automatic').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('GPS').length).toBeGreaterThanOrEqual(1)
  })
})
