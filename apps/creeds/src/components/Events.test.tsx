import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders the section heading and three event cards with date and venue meta', () => {
    render(<Events />)

    expect(screen.getByRole('heading', { name: 'Upcoming Events' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Spreading Peace to world' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Spread Happyness to world' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Spreading Light to world' })).toBeInTheDocument()

    expect(screen.getAllByText('Saturday, 5th may, 2018')).toHaveLength(3)
    expect(screen.getAllByText('Rocky beach Church, Santa monica, Los Angeles, USA')).toHaveLength(
      3,
    )
    expect(screen.getAllByRole('link', { name: 'View Details' })).toHaveLength(3)
  })
})
