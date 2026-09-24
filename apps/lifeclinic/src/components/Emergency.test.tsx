import { render, screen } from '@testing-library/react'
import { Emergency } from './Emergency'
import { emergencyTitle, emergencyPhone, emergencyLocations } from '../data'
import { describe, expect, it } from 'vitest'

describe('Emergency', () => {
  it('renders the emergency heading', () => {
    render(<Emergency />)
    expect(screen.getByRole('heading', { level: 2, name: emergencyTitle })).toBeInTheDocument()
  })

  it('renders the emergency phone number', () => {
    render(<Emergency />)
    expect(screen.getByText(emergencyPhone)).toBeInTheDocument()
  })

  it('renders all location cities', () => {
    render(<Emergency />)
    for (const loc of emergencyLocations) {
      expect(screen.getByRole('heading', { level: 3, name: loc.city })).toBeInTheDocument()
    }
  })

  it('renders location details', () => {
    render(<Emergency />)
    for (const loc of emergencyLocations) {
      expect(screen.getByText(loc.phone)).toBeInTheDocument()
      expect(screen.getByText(loc.email)).toBeInTheDocument()
      expect(screen.getByText(loc.address)).toBeInTheDocument()
    }
  })
})
