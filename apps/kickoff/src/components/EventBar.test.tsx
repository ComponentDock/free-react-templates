import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EventBar } from './EventBar'

describe('EventBar', () => {
  it('shows the matchups, league, countdown labels, and Buy Tickets button', () => {
    render(<EventBar />)

    expect(screen.getByText('Kickoff Warriors')).toBeInTheDocument()
    expect(screen.getByText('Mighty Falcons')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'FIFA Champions League' })).toBeInTheDocument()
    expect(screen.getByText('Semi-Final')).toBeInTheDocument()

    for (const label of ['Days', 'Hours', 'Minutes', 'Seconds']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }

    const button = screen.getByRole('link', { name: 'Buy Tickets' })
    expect(button).toHaveAttribute('href', '#contact')
  })

  it('renders four countdown numbers', () => {
    const { container } = render(<EventBar />)
    const numbers = container.querySelectorAll('span.tabular-nums')
    expect(numbers).toHaveLength(4)
  })
})
