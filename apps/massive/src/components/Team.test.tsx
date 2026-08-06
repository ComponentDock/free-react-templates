import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and at least three team member cards', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { name: 'Our Expert Team' })).toBeInTheDocument()

    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThanOrEqual(3)
  })
})
