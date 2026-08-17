import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { StatsBand } from './StatsBand'
import { STATS } from '../data'

describe('StatsBand', () => {
  it('renders the heading and all four counters with captions', () => {
    render(<StatsBand />)
    expect(screen.getByText(STATS.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: STATS.heading })).toBeInTheDocument()
    for (const counter of STATS.counters) {
      expect(screen.getAllByText(counter.value).length).toBeGreaterThan(0)
      const label = screen.getByText(counter.label).closest('div')!
      expect(within(label).getByText(counter.value)).toBeInTheDocument()
    }
  })
})
