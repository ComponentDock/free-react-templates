import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Volunteers } from './Volunteers'
import {
  socialLabels,
  volunteerPosition,
  volunteers,
  volunteersEyebrow,
  volunteersTitle,
} from '../data'

describe('Volunteers', () => {
  it('shows the Meet Our Volunteer eyebrow and Our Volunteer heading', () => {
    render(<Volunteers />)
    expect(screen.getByText(volunteersEyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: volunteersTitle })).toBeInTheDocument()
  })

  it('renders four distinct staff cards with position line, socials, and bios', () => {
    render(<Volunteers />)
    const names = volunteers.map((volunteer) => volunteer.name)
    expect(new Set(names).size).toBe(4)
    for (const name of names) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    const cards = screen.getAllByTestId('staff-card')
    expect(cards.length).toBe(4)
    for (const card of cards) {
      expect(within(card).getByText(volunteerPosition)).toHaveClass('text-brand')
      for (const label of socialLabels) {
        expect(within(card).getByRole('link', { name: label })).toBeInTheDocument()
      }
    }
    const bios = volunteers.map((volunteer) => volunteer.bio)
    expect(new Set(bios).size).toBe(4)
  })
})
