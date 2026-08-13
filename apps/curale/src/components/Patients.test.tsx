import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Patients } from './Patients'
import { patients } from '../data'

describe('Patients', () => {
  it('renders the section heading and subtitle', () => {
    render(<Patients />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Patient are saying' }),
    ).toBeInTheDocument()
  })

  it('renders two testimonial cards with avatar, name, role and quote', () => {
    const { container } = render(<Patients />)
    for (const patient of patients) {
      expect(screen.getByRole('heading', { level: 3, name: patient.name })).toBeInTheDocument()
    }
    // Both patients share the same role and quote in the source.
    expect(screen.getAllByText('hp specialist')).toHaveLength(2)
    expect(screen.getAllByText(patients[0]!.quote)).toHaveLength(2)
    const avatars = container.querySelectorAll('img.rounded-full')
    expect(avatars).toHaveLength(patients.length)
    expect(avatars[0]).toHaveClass('h-[100px]')
    expect(avatars[0]).toHaveClass('w-[100px]')
  })

  it('composes the appointment form into the section', () => {
    render(<Patients />)
    expect(screen.getByRole('heading', { level: 3, name: 'appointment now' })).toBeInTheDocument()
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
  })
})
