import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section header with badge, heading and description', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Medical Services' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Comprehensive healthcare services delivered by expert physicians/),
    ).toBeInTheDocument()
  })

  it('renders six service cards covering the required topics', () => {
    render(<Services />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6)
    for (const title of [
      'Online Appointment Booking',
      'Expert Doctor Profiles',
      'Comprehensive Medical Services',
      '24/7 Emergency Hotline',
      'Patient Success Stories',
      'Insurance & Payments',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
