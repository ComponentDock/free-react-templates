import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Steps } from './Steps'

describe('Steps', () => {
  it('shows two alternating rows with headings, feature items, CTAs, and images', () => {
    render(<Steps />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Real template creation' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Finish template creation' }),
    ).toBeInTheDocument()

    expect(screen.getAllByRole('img')).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: /Start collaborating/ })).toHaveLength(2)
    // Each row carries three feature items (icon + blurb).
    expect(
      screen.getAllByText(/Even the all-powerful Pointing has no control/).length,
    ).toBeGreaterThanOrEqual(6)
  })
})
