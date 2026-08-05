import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading, four members, and the stats row', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { level: 2, name: 'Meet my team' })).toBeInTheDocument()

    for (let index = 1; index <= 4; index += 1) {
      expect(screen.getByRole('img', { name: `Appson team member ${index}` })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { level: 3, name: 'John Deo' })).toBeInTheDocument()
    expect(screen.getByText('front-end developer')).toBeInTheDocument()

    for (const stat of ['20K', '5K', '30K', '50']) {
      expect(screen.getByText(stat)).toBeInTheDocument()
    }
  })
})
