import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Scoreboard } from './Scoreboard'

describe('Scoreboard', () => {
  it('renders the heading with the accent word, teams, and scores', () => {
    render(<Scoreboard />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/latest game result/i)
    expect(screen.getByRole('heading', { name: 'Sluggers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Mighty Falcons' })).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()
    expect(screen.getByText('vs')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /game report/i })).toHaveAttribute('href', '#news')
  })

  it('uses the diagonal slash band treatment', () => {
    const { container } = render(<Scoreboard />)
    expect(container.querySelector('.slash-accent-brand')).not.toBeNull()
  })
})
