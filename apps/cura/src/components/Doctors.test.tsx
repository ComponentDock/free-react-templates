import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Doctors } from './Doctors'

describe('Doctors', () => {
  it('renders the section heading and four doctor cards', () => {
    render(<Doctors />)
    expect(screen.getByRole('heading', { level: 2, name: 'Meet Our Doctors' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4)
  })

  it('shows each doctor with photo, specialty and credentials', () => {
    render(<Doctors />)
    for (const name of [
      'Dr. Sarah Mitchell',
      'Dr. James Okafor',
      'Dr. Emily Chen',
      'Dr. David Alvarez',
    ]) {
      expect(screen.getByRole('img', { name })).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
    expect(screen.getByText('Cardiologist')).toBeInTheDocument()
    expect(screen.getByText('Board Certified · 15+ Years')).toBeInTheDocument()
  })
})
