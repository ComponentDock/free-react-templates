import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and five expert members', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { name: 'Community experts' })).toBeInTheDocument()

    for (const name of ['Mr. Urela', 'Mr. Uttom', 'Mr. Shakil', 'Mr. Arafat', 'Mr. Saiful']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('img', { hidden: true }).length).toBeGreaterThanOrEqual(5)
  })
})
