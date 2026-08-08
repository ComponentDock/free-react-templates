import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('shows the Service Times heading and intro', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: /Service Times/ })).toBeInTheDocument()
    expect(screen.getByText(/We'd love to have you join us for worship/)).toBeInTheDocument()
  })

  it('shows three service cards with names, times and descriptions', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 3, name: 'Sunday Worship' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Wednesday Bible Study' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Youth Group' })).toBeInTheDocument()

    expect(screen.getByText('9:00 AM & 11:00 AM')).toBeInTheDocument()
    expect(screen.getByText('7:00 PM')).toBeInTheDocument()
    expect(screen.getByText('6:30 PM')).toBeInTheDocument()

    expect(
      screen.getByText(/contemporary and traditional music, inspiring messages/),
    ).toBeInTheDocument()
    expect(screen.getByText(/Mid-week Bible study and prayer meeting/)).toBeInTheDocument()
    expect(screen.getByText(/games, worship, and relevant teaching/)).toBeInTheDocument()
  })

  it('links to Plan Your Visit', () => {
    render(<Services />)

    expect(screen.getAllByRole('link', { name: 'Plan Your Visit' }).length).toBeGreaterThanOrEqual(
      1,
    )
  })
})
