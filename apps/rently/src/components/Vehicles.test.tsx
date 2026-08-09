import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Vehicles } from './Vehicles'

describe('Vehicles', () => {
  it('renders the section heading and car cards with prices', () => {
    render(<Vehicles />)
    expect(screen.getByRole('heading', { name: /Feeatured Vehicles/i })).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { name: /Mercedes Grand Sedan/i }).length,
    ).toBeGreaterThan(0)
    expect(screen.getAllByText('$500').length).toBeGreaterThan(0)
  })

  it('renders Book now and Details links on every card', () => {
    render(<Vehicles />)
    expect(screen.getAllByRole('link', { name: /Book now/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /Details/i }).length).toBeGreaterThan(0)
  })
})
