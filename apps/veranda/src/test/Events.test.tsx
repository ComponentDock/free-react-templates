import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Events } from '../components/Events'
import { EVENTS } from '../data'

describe('Events', () => {
  it('renders four dated cards, their host lines and seat chips', () => {
    render(<Events />)

    expect(
      screen.getByRole('heading', { name: 'Show up live, or catch the recording' }),
    ).toBeInTheDocument()

    const titles = screen.getAllByRole('heading', { level: 3 })
    expect(titles.map((heading) => heading.textContent)).toEqual(EVENTS.map((event) => event.title))

    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('Apr')).toBeInTheDocument()
    expect(screen.getByText('12 of 40 seats left')).toBeInTheDocument()
    expect(screen.getByText('Drop in any time')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View the full calendar' })).toHaveAttribute(
      'href',
      '#pricing',
    )
  })
})
