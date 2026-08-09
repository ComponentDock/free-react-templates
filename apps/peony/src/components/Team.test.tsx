import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the Stylist heading and five member cards', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { level: 2, name: /stylist/i })).toBeInTheDocument()
    for (const member of [
      'Danica Lewis',
      'Nicole Simon',
      'Cloe Meyer',
      'Rachel Clinton',
      'Dave Buff',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: member })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Hair Stylist')).toHaveLength(2)
    expect(screen.getByText('Nail Master')).toBeInTheDocument()
    expect(screen.getByText('Barber')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(5)
  })
})
