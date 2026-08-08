import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Mentors } from './Mentors'

describe('Mentors', () => {
  it('shows the heading and the four mentor cards with avatar, role and track record', () => {
    render(<Mentors />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Learn from Millionaire Traders' }),
    ).toBeInTheDocument()

    for (const name of ['Alex Krieger', 'Sarah Chen', 'Marcus Williams', 'Elena Kowalski']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
      expect(screen.getByAltText(`${name} portrait`)).toHaveAttribute(
        'src',
        expect.stringContaining('picsum.photos/seed/ticker-'),
      )
    }

    expect(screen.getByText('Forex & Macro Analyst')).toBeInTheDocument()
    expect(screen.getByText('$2.4M+ verified profits')).toBeInTheDocument()
    expect(screen.getByText('73% avg. student win rate')).toBeInTheDocument()

    const socialLinks = screen.getAllByRole('link', { name: /profile/ })
    expect(socialLinks).toHaveLength(12)
  })
})
