import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { EventList } from './EventList'
import { events } from '../data'

describe('EventList', () => {
  it('renders the heading and event items', () => {
    render(<EventList />)
    expect(screen.getByRole('heading', { level: 2, name: 'Upcoming Events' })).toBeInTheDocument()
    events.forEach((ev) => {
      expect(screen.getByText(ev.title)).toBeInTheDocument()
      expect(screen.getAllByText(ev.author).length).toBeGreaterThanOrEqual(1)
      expect(screen.getByRole('img', { name: ev.title })).toBeInTheDocument()
    })
  })

  it('renders the view all events button', () => {
    render(<EventList />)
    expect(screen.getByText('view all events')).toBeInTheDocument()
  })
})
