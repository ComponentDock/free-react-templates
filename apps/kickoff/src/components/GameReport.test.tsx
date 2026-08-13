import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GameReport } from './GameReport'

describe('GameReport', () => {
  it('renders the scoreboard, teams, and highlight link', () => {
    render(<GameReport />)

    expect(screen.getByText('Game Report')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Great Win In Final Game' })).toBeInTheDocument()
    expect(screen.getByText('Tue. Feb 21, 2019; FIFA Champions League')).toBeInTheDocument()

    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('Kickoff Warrior')).toBeInTheDocument()
    expect(screen.getByText('Mighty Falcons')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'More Details' })).toHaveAttribute('href', '#contact')
    expect(screen.getByText('Watch Highlights')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Watch Highlights' })).toHaveAttribute('href', '#games')
  })
})
