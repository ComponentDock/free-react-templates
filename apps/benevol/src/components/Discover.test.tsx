import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Discover } from './Discover'
import { DISCOVER_HEADING, DISCOVER_INTRO, DISCOVER_ROWS } from '../data'

describe('Discover', () => {
  it('renders the heading block and both alternating rows with mini counters', () => {
    render(<Discover />)
    expect(screen.getByRole('heading', { level: 2, name: DISCOVER_HEADING })).toBeInTheDocument()
    expect(screen.getByText(DISCOVER_INTRO)).toBeInTheDocument()
    for (const row of DISCOVER_ROWS) {
      expect(screen.getByRole('heading', { level: 3, name: row.title })).toBeInTheDocument()
      // The reference design reuses the same paragraph copy in both rows.
      expect(screen.getAllByText(row.body).length).toBeGreaterThan(0)
      for (const counter of row.counters) {
        // Counter values repeat across rows (e.g. 15 in both).
        expect(screen.getAllByText(counter.value).length).toBeGreaterThan(0)
        expect(screen.getByText(counter.caption)).toBeInTheDocument()
      }
    }
  })
})
