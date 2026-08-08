import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Story } from './Story'

describe('Story', () => {
  it('renders the stats row, heading, blurb, and learn-more link', () => {
    render(<Story />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'From Portland, With Love' }),
    ).toBeInTheDocument()

    for (const [value, label] of [
      ['15+', 'Years Roasting'],
      ['12', 'Origin Countries'],
      ['3', 'Portland Locations'],
      ['50k+', 'Happy Customers'],
    ] as const) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }

    expect(screen.getByText(/Saturday Market/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More About Us' })).toBeInTheDocument()
  })
})
