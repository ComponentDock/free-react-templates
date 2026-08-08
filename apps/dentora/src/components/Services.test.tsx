import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and six service cards with descriptions', () => {
    render(<Services />)

    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Comprehensive Dental Care' }),
    ).toBeInTheDocument()

    const titles = [
      'General Dentistry',
      'Cosmetic Dentistry',
      'Dental Implants',
      'Orthodontics',
      'Teeth Whitening',
      'Emergency Care',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getByText(/Comprehensive exams, cleanings, fillings/)).toBeInTheDocument()
    expect(screen.getByText(/Same-day emergency appointments/)).toBeInTheDocument()
  })
})
