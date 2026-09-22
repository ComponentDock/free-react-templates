import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ServicesGrid } from './ServicesGrid'

describe('ServicesGrid', () => {
  it('renders all four service titles', () => {
    render(<ServicesGrid />)
    expect(screen.getByText('Special Rooms')).toBeDefined()
    expect(screen.getByText('Swimming Pool')).toBeDefined()
    expect(screen.getByText('Restaurant')).toBeDefined()
    expect(screen.getByText('Suites & Rooms')).toBeDefined()
  })

  it('renders the Learn More link on the dark overlay card', () => {
    render(<ServicesGrid />)
    expect(screen.getByText('Learn More')).toBeDefined()
  })

  it('renders images for all services', () => {
    render(<ServicesGrid />)
    expect(screen.getByAltText('Special Rooms')).toBeDefined()
    expect(screen.getByAltText('Swimming Pool')).toBeDefined()
    expect(screen.getByAltText('Restaurant')).toBeDefined()
    expect(screen.getByAltText('Suites & Rooms')).toBeDefined()
  })
})
