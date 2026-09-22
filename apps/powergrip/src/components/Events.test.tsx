import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Events } from './Events'
import { events, eventsTitle, eventsSubtitle } from '../data'

describe('Events', () => {
  it('renders the heading and subtitle', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { level: 2, name: eventsTitle })).toBeInTheDocument()
    expect(screen.getAllByText(eventsSubtitle).length).toBeGreaterThan(0)
  })

  it('renders all three event cards with unique titles and locations', () => {
    render(<Events />)
    for (const event of events) {
      expect(screen.getByRole('heading', { level: 3, name: event.title })).toBeInTheDocument()
      expect(screen.getAllByText(event.location).length).toBeGreaterThan(0)
    }
  })
})
