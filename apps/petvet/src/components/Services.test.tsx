import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('shows the eyebrow, heading, CTA, stats, and offered services checklist', () => {
    render(<Services />)

    expect(screen.getByText('Welcome to Petvet')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'We Are Best Agency For Your Pets' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Make An Appointment' })).toHaveAttribute(
      'href',
      '#contact',
    )
    for (const stat of [
      'Qualified Groomer',
      'Years of Experienced',
      'Animal Lover',
      'Best Pet Care',
    ]) {
      expect(screen.getByText(stat)).toBeInTheDocument()
    }
    expect(screen.getByText('Select Your Services')).toBeInTheDocument()
    for (const service of ['Pet Adoption', 'Pet Grooming', 'Vaccination']) {
      expect(screen.getByText(service)).toBeInTheDocument()
    }
  })
})
