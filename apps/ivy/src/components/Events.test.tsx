import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'
import { EVENTS } from '../data'

describe('Events', () => {
  it('renders the heading and three event cards', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { level: 2, name: 'Upcoming Events' })).toBeInTheDocument()
    for (const event of EVENTS) {
      expect(screen.getByRole('heading', { level: 3, name: event.title })).toBeInTheDocument()
      expect(screen.getByText(event.time)).toBeInTheDocument()
      expect(screen.getByText(event.blurb)).toBeInTheDocument()
      expect(screen.getByText(event.day)).toBeInTheDocument()
    }
    // "MAR" is shared by the first two events
    expect(screen.getAllByText('MAR')).toHaveLength(2)
    expect(screen.getByText('APR')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Learn More' })).toHaveLength(EVENTS.length)
  })
})
