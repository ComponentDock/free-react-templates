import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BookingCard } from './BookingCard'

describe('BookingCard', () => {
  it('renders the dinner images and booking form', () => {
    render(<BookingCard />)

    const images = screen.getAllByAltText(/people enjoying dinner/i)
    expect(images.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('form', { name: /dinner booking form/i })).toBeInTheDocument()
  })

  it('renders the heading inside the form', () => {
    render(<BookingCard />)

    expect(
      screen.getByRole('heading', { level: 2, name: /booking place for your dinner/i }),
    ).toBeInTheDocument()
  })
})
