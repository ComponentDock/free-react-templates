import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PlaceTime } from './PlaceTime'

describe('PlaceTime', () => {
  it('shows the heading and the three event cards', () => {
    render(<PlaceTime />)
    expect(screen.getByRole('heading', { name: 'Place & Time' })).toBeInTheDocument()
    for (const title of ['The Reception', 'The Ceremony', 'The Party']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders date, address, phone, and a See Map link for every card', () => {
    render(<PlaceTime />)
    expect(screen.getAllByText('Saturday, 28, 2019 · 02:00 pm-10:00 pm')).toHaveLength(3)
    expect(
      screen.getAllByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toHaveLength(3)
    expect(screen.getAllByText('+0 (123) 456 78 910')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'See Map' })).toHaveLength(3)
  })

  it('renders an icon for each event card', () => {
    const { container } = render(<PlaceTime />)
    expect(container.querySelectorAll('svg')).toHaveLength(3)
  })
})
