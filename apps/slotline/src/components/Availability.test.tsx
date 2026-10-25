import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Availability } from '../components/Availability'
import { availability } from '../content'

describe('Availability', () => {
  it('renders four people, their utilisation and a labelled weekly table', () => {
    render(<Availability />)
    const table = screen.getByRole('table', { name: availability.caption })
    expect(screen.getAllByRole('row')).toHaveLength(5)
    for (const row of availability.rows) {
      expect(screen.getByText(row.name)).toBeInTheDocument()
      expect(screen.getByText(row.role)).toBeInTheDocument()
      expect(screen.getByText(`${row.utilisation}%`)).toBeInTheDocument()
    }
    expect(table).toBeInTheDocument()
  })

  it('paints all four chip states, including the hatch with no figure', () => {
    render(<Availability />)
    expect(document.querySelectorAll('[title*="Booked"]').length).toBeGreaterThan(0)
    expect(document.querySelectorAll('[title*="Held, unconfirmed"]').length).toBeGreaterThan(0)
    expect(document.querySelectorAll('[title*="Open"]').length).toBeGreaterThan(0)

    const off = document.querySelectorAll('[title*="Not working"]')
    expect(off).toHaveLength(5)
    for (const chip of Array.from(off)) {
      expect(chip.className).toContain('repeating-linear-gradient')
      expect(chip.textContent).toBe('Not working')
    }
  })

  it('names each chip for a screen reader and shows the legend', () => {
    render(<Availability />)
    expect(screen.getAllByText('Held, unconfirmed').length).toBeGreaterThanOrEqual(availability.legend.length)
    for (const item of availability.legend) {
      expect(screen.getAllByText(item.state).length).toBeGreaterThan(0)
    }
    expect(screen.getByText(availability.note)).toBeInTheDocument()
  })
})
