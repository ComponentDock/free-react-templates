import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PracticeAreas } from './PracticeAreas'

describe('PracticeAreas', () => {
  it('renders the heading and ten practice area cards', () => {
    render(<PracticeAreas />)

    expect(screen.getByRole('heading', { level: 2, name: 'Practice Areas' })).toBeInTheDocument()

    const areas = [
      'Family Law',
      'Business Law',
      'Insurance Law',
      'Criminal Law',
      'Property Law',
      'Employment Law',
      'Fire Accident',
      'Financial Law',
      'Drug Offenses',
      'Sexual Offenses',
    ]

    for (const area of areas) {
      expect(screen.getByRole('heading', { level: 3, name: area })).toBeInTheDocument()
    }
  })
})
