import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RoomsShowcase } from './RoomsShowcase'

describe('RoomsShowcase', () => {
  it('renders Luxury Double Suite and Luxury Single Room headings', () => {
    render(<RoomsShowcase />)

    expect(
      screen.getByRole('heading', { level: 3, name: 'Luxury Double Suite' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Luxury Single Room' }),
    ).toBeInTheDocument()
  })

  it('renders prices $129 and $89', () => {
    render(<RoomsShowcase />)

    expect(screen.getByText('$129')).toBeInTheDocument()
    expect(screen.getByText('$89')).toBeInTheDocument()
  })

  it('renders feature checklist items for each room', () => {
    render(<RoomsShowcase />)

    // Luxury Double Suite features
    expect(screen.getByText('Ocean View')).toBeInTheDocument()
    expect(screen.getByText('King Size Bed')).toBeInTheDocument()
    expect(screen.getByText('Private Balcony')).toBeInTheDocument()

    // Luxury Single Room features
    expect(screen.getByText('Beach Access')).toBeInTheDocument()
    expect(screen.getByText('Queen Bed')).toBeInTheDocument()
    expect(screen.getByText('Smart TV')).toBeInTheDocument()
  })

  it('renders Book Now buttons for each room', () => {
    render(<RoomsShowcase />)

    const bookButtons = screen.getAllByText('Book Now')
    expect(bookButtons.length).toBeGreaterThanOrEqual(2)
  })
})
