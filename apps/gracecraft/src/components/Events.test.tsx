import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('shows section title and 3 events', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { name: /upcoming events/i })).toBeInTheDocument()
    const eventTitles = screen.getAllByRole('heading', { level: 3 })
    expect(eventTitles).toHaveLength(3)
  })

  it('shows date, time, and location for each event', () => {
    render(<Events />)
    expect(screen.getAllByText(/08:00 AM - 11:00 AM/).length).toBe(3)
    expect(screen.getAllByText(/1195 Lobortis Rd/).length).toBe(3)
    expect(screen.getAllByText('18').length).toBeGreaterThanOrEqual(1)
  })
})
