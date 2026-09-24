import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TravelFood } from './TravelFood'

describe('TravelFood', () => {
  it('renders the section heading', () => {
    render(<TravelFood />)
    expect(screen.getByText('Travel and food')).toBeInTheDocument()
  })

  it('renders 4 small cards and 1 featured card', () => {
    render(<TravelFood />)
    const smallCards = screen.getAllByText('Technical Support 10 With Dealing With')
    expect(smallCards.length).toBeGreaterThanOrEqual(4)
    expect(
      screen.getByText('Dealing With Technical Support With 10 Useful Tips'),
    ).toBeInTheDocument()
  })
})
