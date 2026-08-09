import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and at least three member cards with roles', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { name: 'Professional Teams' })).toBeInTheDocument()
    expect(screen.getAllByRole('article').length).toBeGreaterThanOrEqual(3)
    for (const name of ['Guy C. Pulido', 'Steve L. Nolan']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(
      screen.getAllByRole('heading', { name: 'Edgar P. Mathis' }).length,
    ).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText(/Master Barber|Color Expart/).length).toBeGreaterThanOrEqual(3)
  })
})
