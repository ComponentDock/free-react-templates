import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Community } from './Community'

describe('Community', () => {
  it('renders the section heading and three upcoming events', () => {
    render(<Community />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Join a Thriving Community' }),
    ).toBeInTheDocument()

    for (const event of ['Startup Pitch Night', 'Web Dev Meetup', 'Networking Lunch']) {
      expect(screen.getByRole('heading', { level: 3, name: event })).toBeInTheDocument()
    }
  })

  it('shows event dates and an RSVP action for every event', () => {
    render(<Community />)

    expect(screen.getByText(/Thu, Aug 21/)).toBeInTheDocument()
    expect(screen.getByText(/Sat, Aug 30/)).toBeInTheDocument()
    expect(screen.getByText(/Fri, Sep 5/)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'RSVP' })).toHaveLength(3)
  })
})
