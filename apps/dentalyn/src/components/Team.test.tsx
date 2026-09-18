import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('shows heading and three dentist cards', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { name: 'Our Dentist' })).toBeInTheDocument()
    expect(screen.getByText('Dr. Michael Barley')).toBeInTheDocument()
    expect(screen.getByText('Dr. Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('Dr. James Wilson')).toBeInTheDocument()
  })

  it('shows roles for each dentist', () => {
    render(<Team />)

    expect(screen.getByText('Implant Expert')).toBeInTheDocument()
    expect(screen.getByText('Orthodontist')).toBeInTheDocument()
    expect(screen.getByText('Cosmetic Dentist')).toBeInTheDocument()
  })

  it('renders dentist images', () => {
    render(<Team />)

    expect(screen.getByAltText('Dr. Michael Barley')).toBeInTheDocument()
    expect(screen.getByAltText('Dr. Sarah Chen')).toBeInTheDocument()
    expect(screen.getByAltText('Dr. James Wilson')).toBeInTheDocument()
  })
})
