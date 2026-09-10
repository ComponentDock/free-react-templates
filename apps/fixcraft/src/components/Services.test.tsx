import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders heading', () => {
    render(<Services />)
    expect(screen.getByText('Our car services')).toBeDefined()
  })

  it('renders all six service cards', () => {
    render(<Services />)
    expect(screen.getByText('Oil change')).toBeDefined()
    expect(screen.getByText('Tire Change')).toBeDefined()
    expect(screen.getByText('Batteries')).toBeDefined()
    expect(screen.getByText('Engine Repair')).toBeDefined()
    expect(screen.getByText('Tow Truck')).toBeDefined()
    expect(screen.getByText('Car Maintenance')).toBeDefined()
  })

  it('renders Read more links', () => {
    render(<Services />)
    const links = screen.getAllByText('Read more')
    expect(links).toHaveLength(6)
  })
})
