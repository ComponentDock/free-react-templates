import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Doctors } from './Doctors'

const doctors: ReadonlyArray<{ name: string; specialty: string }> = [
  { name: 'Dr. Emily Carter', specialty: 'Cardiologist' },
  { name: 'Dr. James Okafor', specialty: 'Pediatrician' },
  { name: 'Dr. Sofia Marchetti', specialty: 'Orthopedic Surgeon' },
  { name: 'Dr. Daniel Reyes', specialty: 'Neurologist' },
]

describe('Doctors', () => {
  it('renders the heading and four doctor cards', () => {
    render(<Doctors />)
    expect(screen.getByRole('heading', { level: 2, name: 'Meet Our Doctors' })).toBeInTheDocument()
    for (const doctor of doctors) {
      expect(screen.getByRole('heading', { level: 3, name: doctor.name })).toBeInTheDocument()
      expect(screen.getByText(doctor.specialty)).toBeInTheDocument()
    }
  })

  it('renders a seeded portrait photo for every doctor', () => {
    render(<Doctors />)
    for (let index = 1; index <= doctors.length; index += 1) {
      expect(screen.getByAltText(`Portrait of ${doctors[index - 1]!.name}`)).toHaveAttribute(
        'src',
        expect.stringContaining(`picsum.photos/seed/medora-doctor-${index}`),
      )
    }
  })
})
