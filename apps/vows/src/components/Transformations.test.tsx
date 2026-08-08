import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Transformations } from './Transformations'

describe('Transformations', () => {
  it('renders the pill eyebrow, heading, and sub', () => {
    render(<Transformations />)

    expect(screen.getByText('Venue Styling')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Venue Transformations' }),
    ).toBeInTheDocument()
  })

  it('renders before/after cards with badges', () => {
    render(<Transformations />)

    expect(screen.getByText('Ceremony Setup')).toBeInTheDocument()
    expect(screen.getByText('Reception Design')).toBeInTheDocument()

    expect(screen.getAllByText('Before')).toHaveLength(2)
    expect(screen.getAllByText('After')).toHaveLength(2)
    expect(screen.getAllByRole('img', { name: 'Before' })).toHaveLength(2)
    expect(screen.getAllByRole('img', { name: 'After' })).toHaveLength(2)
  })
})
