import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and the three doctor cards', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /our expert doctors/i })).toBeInTheDocument()
    for (const doctor of ['Caroline Grant', 'Dr. Maria Angel', 'Nathan Mullins']) {
      expect(screen.getByRole('heading', { name: doctor })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/plastic surgeon/i)).toHaveLength(3)
  })
})
