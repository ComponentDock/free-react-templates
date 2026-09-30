import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { EventsGames } from './EventsGames'

describe('EventsGames', () => {
  it('renders the navy two-column band with titled lists', () => {
    render(<EventsGames />)
    expect(screen.getByRole('heading', { name: 'Upcoming events' })).toBeInTheDocument()
    expect(screen.getByText("What's next this month")).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest games' })).toBeInTheDocument()
    expect(screen.getByText('Results')).toBeInTheDocument()
  })

  it('renders three event rows with photo, title, date and See More link', () => {
    render(<EventsGames />)
    expect(screen.getByText('Ravens vs Hawks — Home Opener')).toBeInTheDocument()
    expect(screen.getAllByText('August 25, 2026 / 17 UTC').length).toBeGreaterThan(0)
    expect(screen.getByText('Open Training Session')).toBeInTheDocument()
    expect(screen.getByText('Club Legends Night')).toBeInTheDocument()
    const seeMore = screen.getAllByRole('link', { name: 'See More' })
    expect(seeMore.length).toBeGreaterThanOrEqual(3)
    expect(seeMore[0]).toHaveAttribute('href', '#events')
  })

  it('renders game rows with crests, league, score and date', () => {
    render(<EventsGames />)
    expect(screen.getByText('The Ravens')).toBeInTheDocument()
    expect(screen.getByText('The Bulls')).toBeInTheDocument()
    expect(screen.getByText('Champions League')).toBeInTheDocument()
    expect(screen.getByText('8 : 3')).toBeInTheDocument()
    expect(screen.getByText('The Hawks')).toBeInTheDocument()
    expect(screen.getByText('The Wolves')).toBeInTheDocument()
    expect(screen.getByText('2 : 2')).toBeInTheDocument()
    const teamLinks = screen.getAllByRole('link', { name: 'The Ravens' })
    expect(teamLinks[teamLinks.length - 1]).toHaveAttribute('href', '#team')
  })

  it('shows the decorative player photo behind the band', () => {
    render(<EventsGames />)
    const decorative = screen.getAllByAltText('')[0]
    expect(decorative).toHaveAttribute('src', expect.stringContaining('matchday-player-bg'))
  })
})
