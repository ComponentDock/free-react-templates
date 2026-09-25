import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Doctors } from './Doctors'

describe('Doctors', () => {
  it('renders the heading and all four doctor cards', () => {
    render(<Doctors />)

    expect(screen.getByRole('heading', { name: 'Our Doctors' })).toBeInTheDocument()
    expect(screen.getByText('Dr. Sarah Wilson')).toBeInTheDocument()
    expect(screen.getByText('Dr. Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Dr. Emily Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Dr. James Patel')).toBeInTheDocument()
  })

  it('shows doctor specialty for each doctor', () => {
    render(<Doctors />)

    expect(screen.getByText('Cardiologist')).toBeInTheDocument()
    expect(screen.getByText('Neurologist')).toBeInTheDocument()
    expect(screen.getByText('Pediatrician')).toBeInTheDocument()
    expect(screen.getByText('Dentist')).toBeInTheDocument()
  })

  it('shows contact details on hover for each doctor', () => {
    render(<Doctors />)

    expect(screen.getByText('sarah.wilson@curelink.com')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('123 Medical Center Dr, Suite 200')).toBeInTheDocument()
  })
})
