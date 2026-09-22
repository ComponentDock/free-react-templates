import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PlayerStatistics } from './PlayerStatistics'

describe('PlayerStatistics', () => {
  it('renders the section heading', () => {
    render(<PlayerStatistics />)
    expect(screen.getByText('Player Statistics')).toBeInTheDocument()
  })

  it('renders tab buttons', () => {
    render(<PlayerStatistics />)
    expect(screen.getByRole('button', { name: /goalkeepers/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /defenders/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /midfielders/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /attackers/i })).toBeInTheDocument()
  })

  it('shows default tab players', () => {
    render(<PlayerStatistics />)
    expect(screen.getByText('Nathaniel Murphy')).toBeInTheDocument()
    expect(screen.getByText('95.5 pts')).toBeInTheDocument()
  })

  it('switches to each tab and shows players', async () => {
    const user = userEvent.setup()
    render(<PlayerStatistics />)

    await user.click(screen.getByRole('button', { name: /defenders/i }))
    expect(screen.getByText('Olivia Barnes')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /midfielders/i }))
    expect(screen.getByText('Sophia Lane')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /attackers/i }))
    expect(screen.getByText('Isabella Ford')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /goalkeepers/i }))
    expect(screen.getByText('Nathaniel Murphy')).toBeInTheDocument()
  })

  it('renders league table', () => {
    render(<PlayerStatistics />)
    expect(screen.getByText('League Points')).toBeInTheDocument()
    expect(screen.getByText('Costa Caribe')).toBeInTheDocument()
    expect(screen.getByText('Brooklyn Nets')).toBeInTheDocument()
  })

  it('renders View Portfolio links', () => {
    render(<PlayerStatistics />)
    const links = screen.getAllByText('View Portfolio')
    expect(links.length).toBeGreaterThan(0)
  })
})
