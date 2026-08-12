import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EventsSection } from './EventsSection'
import { EVENTS } from '../data'

describe('EventsSection', () => {
  it('renders the heading and three date-and-title cards', () => {
    render(<EventsSection />)

    expect(screen.getByRole('heading', { level: 2, name: 'Upcoming Events' })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)

    for (const event of EVENTS) {
      expect(screen.getAllByText(event.date)).toHaveLength(3)
      expect(screen.getAllByRole('link', { name: event.title })).toHaveLength(3)
    }
  })
})
