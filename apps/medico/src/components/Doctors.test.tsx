import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Doctors } from './Doctors'
import { doctorImageAlt, doctors, doctorsHeading, doctorsSubtitle, socialNames } from '../data'

describe('Doctors', () => {
  it('renders the title and subtitle', () => {
    render(<Doctors />)

    expect(screen.getByRole('heading', { level: 2, name: doctorsHeading })).toBeInTheDocument()
    expect(screen.getByText(doctorsSubtitle)).toBeInTheDocument()
  })

  it('renders four doctor cards with photos, names and specialties', () => {
    render(<Doctors />)

    expect(doctors).toHaveLength(4)
    for (const doctor of doctors) {
      expect(
        screen.getAllByRole('heading', { level: 3, name: doctor.name }).length,
      ).toBeGreaterThan(0)
      expect(screen.getAllByText(doctor.specialty).length).toBeGreaterThan(0)
    }
    // Distinct cards: one image per doctor (names repeat in the source).
    expect(screen.getAllByRole('img', { name: doctorImageAlt('DR Adam Billiard') })).toHaveLength(2)
    expect(screen.getAllByRole('img', { name: doctorImageAlt('DR Fred Macyard') })).toHaveLength(1)
    expect(screen.getAllByRole('img', { name: doctorImageAlt('DR Justin Stuard') })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4)
  })

  it('renders social icon links on the cards', () => {
    render(<Doctors />)

    for (const name of socialNames) {
      expect(screen.getAllByRole('link', { name: `Visit ${name}` }).length).toBeGreaterThan(0)
    }
  })
})
