import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and three dentist cards with names, roles, and education', () => {
    render(<Team />)

    expect(screen.getByText('Our Team')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Meet Our Dentists' })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 3, name: 'Dr. Sarah Mitchell' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Dr. James Park' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Dr. Maria Santos' })).toBeInTheDocument()

    expect(screen.getByText(/Lead Dentist, DDS/)).toBeInTheDocument()
    expect(screen.getByText(/Cosmetic Dentist, DMD/)).toBeInTheDocument()
    expect(screen.getByText(/Orthodontist, DDS, MS/)).toBeInTheDocument()

    expect(screen.getByText('UCSF School of Dentistry')).toBeInTheDocument()
    expect(screen.getAllByText('Columbia University CDM').length).toBe(2)

    expect(screen.getByAltText('Portrait of Dr. Sarah Mitchell')).toBeInTheDocument()
  })
})
