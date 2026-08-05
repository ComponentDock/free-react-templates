import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and the four members with roles', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { level: 2, name: 'Special Team' })).toBeInTheDocument()

    for (const name of ['Jemy Sedonce', 'Deborah Brown', 'Harry Banks', 'Victoria Clark']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }

    expect(screen.getByText('Co. Founder')).toBeInTheDocument()
    expect(screen.getByText('UX Designer')).toBeInTheDocument()
    expect(screen.getByText('Founder')).toBeInTheDocument()
    expect(screen.getByText('Creative Director')).toBeInTheDocument()

    expect(screen.getAllByRole('img')).toHaveLength(4)
  })
})
