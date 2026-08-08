import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Directors } from './Directors'

describe('Directors', () => {
  it('renders the heading and four director cards', () => {
    render(<Directors />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Companions for the Journey' }),
    ).toBeInTheDocument()
    for (const name of [
      'Sr. Margaret Anne, OSB',
      'Fr. David Brennan',
      'Dr. Sarah Chen',
      'Brother Thomas',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
  })

  it('shows role, specialties and availability on each card', () => {
    render(<Directors />)
    expect(screen.getByText('Director of Spiritual Formation')).toBeInTheDocument()
    expect(
      screen.getByText('Centering Prayer · Discernment · Life Transitions'),
    ).toBeInTheDocument()
    expect(screen.getByText('Mon–Thu')).toBeInTheDocument()
    expect(screen.getByAltText('Portrait of Sr. Margaret Anne, OSB')).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/hush-director-1'),
    )
  })
})
