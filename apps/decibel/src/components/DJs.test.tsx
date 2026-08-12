import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DJs } from './DJs'

describe('DJs', () => {
  it('shows the heading and six DJ cards with overlay content', () => {
    render(<DJs />)
    expect(screen.getByRole('heading', { name: 'Our DJs' })).toBeInTheDocument()

    for (const name of [
      'Megan Smith',
      'Brooke Cagle',
      'Philip Martin',
      'Sara Chen',
      'Daniel Reyes',
      'Emma Blake',
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }

    expect(screen.getByText('Resident DJ')).toBeInTheDocument()
    expect(screen.getByText('Producer')).toBeInTheDocument()
    expect(screen.getByText('Radio Host')).toBeInTheDocument()

    // Three social links per card.
    expect(screen.getAllByRole('link', { name: 'Facebook' })).toHaveLength(6)
    expect(screen.getAllByRole('link', { name: 'Twitter' })).toHaveLength(6)
    expect(screen.getAllByRole('link', { name: 'LinkedIn' })).toHaveLength(6)
  })
})
