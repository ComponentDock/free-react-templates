import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and team member cards', () => {
    render(<Team />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Behind those Beautiful Works' }),
    ).toBeInTheDocument()
    for (const name of [
      'Lloyd Wilson',
      'Rachel Parker',
      'Ian Smith',
      'Alicia Henderson',
      'Jacob Bolton',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
    expect(screen.getByText('CEO, Founder')).toBeInTheDocument()
  })
})
