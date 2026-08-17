import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { StatsBand } from './StatsBand'
import { STATS } from '../data'

describe('StatsBand', () => {
  it('renders the heading, paragraph, and More About Us CTA', () => {
    render(<StatsBand />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toContain(
      'create exceptional spaces',
    )
    expect(screen.getByText(STATS.text)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'More About Us' })).toHaveAttribute('href', '#about')
  })

  it('renders both orange counters with labels', () => {
    render(<StatsBand />)
    for (const counter of STATS.counters) {
      expect(screen.getByText(counter.value)).toBeInTheDocument()
      expect(screen.getByText(counter.label)).toBeInTheDocument()
    }
  })
})
