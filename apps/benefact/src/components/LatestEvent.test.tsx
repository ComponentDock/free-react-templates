import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestEvent } from './LatestEvent'

describe('LatestEvent', () => {
  it('shows the heading and two event cards', () => {
    const { container } = render(<LatestEvent />)
    expect(screen.getByRole('heading', { level: 2, name: 'Latest Event' })).toBeInTheDocument()

    const cards = container.querySelectorAll('article.event-29191')
    expect(cards).toHaveLength(2)

    expect(screen.getAllByText('22')).toHaveLength(2)
    expect(screen.getAllByText('Oct 2019')).toHaveLength(2)
    expect(screen.getAllByText('9:30 AM — 11:30 AM')).toHaveLength(2)
    expect(screen.getAllByText('Ghana Africa')).toHaveLength(2)
    expect(screen.getAllByText('Ratione Delectus Assumenda Rem Modi Quaerat Laborum')).toHaveLength(
      2,
    )
  })

  it('shows a green date badge with a clock and a location meta', () => {
    const { container } = render(<LatestEvent />)
    const badges = container.querySelectorAll('.event-29191 > div > div')
    expect(badges[0]!).toHaveClass('bg-primary')
    expect(container.querySelectorAll('svg')).toHaveLength(4)
  })
})
