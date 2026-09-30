import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { footballLeague, nextMatch } from '../data'
import { NextMatchSection } from './NextMatchSection'

describe('NextMatchSection', () => {
  it('renders two widgets with red title bars', () => {
    render(<NextMatchSection />)
    expect(screen.getByRole('heading', { level: 3, name: 'Next Match' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Football League' })).toBeInTheDocument()
  })

  it('renders a VS matchup block with match info in each widget', () => {
    render(<NextMatchSection />)
    expect(screen.getAllByText('vs')).toHaveLength(2)
    expect(screen.getAllByText(nextMatch.home.name)).toHaveLength(2)
    expect(screen.getAllByText(nextMatch.away.name)).toHaveLength(2)
    expect(screen.getAllByText(nextMatch.league)).toHaveLength(2)
    expect(screen.getAllByText(nextMatch.date)).toHaveLength(2)
    expect(screen.getAllByText(nextMatch.venue)).toHaveLength(2)
  })

  it('shows a ticking countdown inside the Next Match widget', () => {
    render(<NextMatchSection />)
    expect(screen.getByText('Weeks')).toBeInTheDocument()
    expect(screen.getByText('Sec')).toBeInTheDocument()
  })

  it('shows the league standings table with eight rows in the Football League widget', () => {
    render(<NextMatchSection />)
    const table = screen.getByRole('table')
    const headers = within(table)
      .getAllByRole('columnheader')
      .map((cell) => cell.textContent)
    expect(headers).toEqual(['Team', 'P', 'W', 'D', 'L', 'PTS'])
    // header row + 8 team rows
    expect(within(table).getAllByRole('row')).toHaveLength(footballLeague.standings.length + 1)
    expect(within(table).getByText(footballLeague.standings[0].team)).toBeInTheDocument()
  })
})
