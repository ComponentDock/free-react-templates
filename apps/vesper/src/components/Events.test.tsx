import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Events } from './Events'

describe('Events', () => {
  it('renders the photo heading band with kicker and heading', () => {
    render(<Events />)

    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Upcoming Events' })).toBeInTheDocument()
  })

  it('renders six event cards with time, title, pastor, address and Join Us', () => {
    render(<Events />)

    const joinButtons = screen.getAllByRole('link', { name: 'Join Us' })
    expect(joinButtons).toHaveLength(6)

    expect(screen.getAllByText('8:30am - 11:30am').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('by pastor: Jerry Simon').length).toBeGreaterThanOrEqual(1)
    expect(
      screen.getAllByText('203 Fake St. Mountain View, San Francisco, California, USA').length,
    ).toBeGreaterThanOrEqual(1)

    for (const title of [
      'Sharing Our Faith & Gospel',
      'Community Bible Study',
      'Youth Gathering',
      'Prayer Morning',
      'Choir Practice',
      'Fellowship Meal',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
