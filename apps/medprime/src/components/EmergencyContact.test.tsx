import { render, screen } from '@testing-library/react'
import EmergencyContact from './EmergencyContact'

describe('EmergencyContact', () => {
  it('renders emergency heading and contact info', () => {
    render(<EmergencyContact />)

    expect(screen.getByText('Emergency Call')).toBeInTheDocument()
    expect(screen.getByText('+1 (800) 123-4567')).toBeInTheDocument()
  })

  it('renders location info', () => {
    render(<EmergencyContact />)

    expect(screen.getByText('Our Location')).toBeInTheDocument()
    expect(screen.getByText(/123 Medical Center Drive/)).toBeInTheDocument()
  })

  it('renders working hours', () => {
    render(<EmergencyContact />)

    expect(screen.getByText('Working Hours')).toBeInTheDocument()
    expect(screen.getByText(/Mon — Fri: 8:00 AM — 6:00 PM/)).toBeInTheDocument()
  })
})
