import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ShowCards } from './ShowCards'

describe('ShowCards', () => {
  it('renders four photo cards pulled up over the hero with lime title boxes and black schedule boxes', () => {
    const { container } = render(<ShowCards />)

    // The band overlaps the bottom of the hero (negative top margin).
    expect(container.querySelector('section')).toHaveClass('-mt-[100px]')

    for (const title of ['Art Gossip', 'Good Morning Show', 'Blues Radio', 'Classic Songs']) {
      expect(screen.getByRole('heading', { level: 2, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Friday 1:00pm — 2:30pm')).toHaveLength(4)

    const titles = screen.getAllByRole('heading', { level: 2 })
    for (const h of titles) {
      expect(h).toHaveClass('bg-brand')
    }
    const schedules = screen.getAllByText('Friday 1:00pm — 2:30pm')
    for (const s of schedules) {
      expect(s).toHaveClass('bg-ink')
    }
  })
})
