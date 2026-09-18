import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading, description, and three feature cards', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Smilecraft with a Personal Touch' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/At Smilecraft, we believe every patient/)).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Smilecraft dental clinic/ })).toBeInTheDocument()

    const featureTitles = [
      'Well Experience Dentist',
      'High Technology Facilities',
      'Comfortable Clinics',
    ]
    for (const title of featureTitles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
