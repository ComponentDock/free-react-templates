import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UpcomingShows } from './UpcomingShows'

describe('UpcomingShows', () => {
  it('renders the section heading', () => {
    render(<UpcomingShows />)
    expect(screen.getByRole('heading', { name: /Upcoming Shows/i })).toBeInTheDocument()
  })

  it('renders all show events', () => {
    render(<UpcomingShows />)
    expect(screen.getByText('Electric Castle Festival')).toBeInTheDocument()
    expect(screen.getByText('Electric Festival')).toBeInTheDocument()
    expect(screen.getByText('Sunflower Festival')).toBeInTheDocument()
    expect(screen.getByText('Summer Sounds')).toBeInTheDocument()
  })

  it('renders buy tickets buttons', () => {
    render(<UpcomingShows />)
    const buttons = screen.getAllByRole('link', { name: /buy tickets/i })
    expect(buttons).toHaveLength(4)
  })

  it('renders show dates', () => {
    render(<UpcomingShows />)
    expect(screen.getByText('17')).toBeInTheDocument()
    expect(screen.getByText('23')).toBeInTheDocument()
    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()
  })

  it('renders show locations', () => {
    render(<UpcomingShows />)
    expect(screen.getByText('Cluj, Romania')).toBeInTheDocument()
    expect(screen.getByText('Manhattan, NY, USA')).toBeInTheDocument()
    expect(screen.getByText('Paris, France')).toBeInTheDocument()
    expect(screen.getByText('Berlin, Germany')).toBeInTheDocument()
  })
})
