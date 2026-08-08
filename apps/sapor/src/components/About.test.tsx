import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('shows the heading, history paragraphs and three stats', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'A Family Tradition of Excellence' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Rossi family in 1985/)).toBeInTheDocument()
    expect(screen.getByText(/time-honored recipes/)).toBeInTheDocument()

    for (const stat of ['40+', '50K+', '4.9']) {
      expect(screen.getByText(stat)).toBeInTheDocument()
    }
    for (const label of ['Years of Excellence', 'Happy Guests', 'Star Rating']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
