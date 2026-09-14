import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('shows room cards with prices', () => {
    render(<Rooms />)
    expect(screen.getByText('Premium King Room')).toBeInTheDocument()
    expect(screen.getByText('Deluxe Suite')).toBeInTheDocument()
    expect(screen.getByText('$400')).toBeInTheDocument()
    expect(screen.getByText('$250')).toBeInTheDocument()
  })

  it('shows View Details buttons', () => {
    render(<Rooms />)
    const buttons = screen.getAllByText('View Details')
    expect(buttons.length).toBeGreaterThanOrEqual(2)
  })
})
