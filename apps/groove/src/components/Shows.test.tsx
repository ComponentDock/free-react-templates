import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Shows } from './Shows'

describe('Shows', () => {
  it('renders the section heading and subtitle', () => {
    render(<Shows />)

    expect(screen.getByText('Upcoming Shows')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /WHEN WE ALL FALL ASLEEP/ }),
    ).toBeInTheDocument()
  })

  it('renders all 5 show items with titles and CTAs', () => {
    render(<Shows />)

    const showTitles = [
      'Sunburn Arena with Wiz Khalifa',
      'Raymond MTV India Music',
      'Sunburn Goa 2024',
      'The Piano Man presents Shockblast',
      'Zangoora - Kingdom of Dreams',
    ]

    for (const title of showTitles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }

    const ctaButtons = screen.getAllByRole('link', { name: 'Buy tickets' })
    expect(ctaButtons.length).toBeGreaterThanOrEqual(5)
  })

  it('renders a View all button', () => {
    render(<Shows />)

    expect(screen.getByRole('link', { name: 'View all' })).toBeInTheDocument()
  })

  it('displays dates with day and month', () => {
    render(<Shows />)

    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('Aug')).toBeInTheDocument()
    // Multiple Sep dates exist
    const sepDates = screen.getAllByText('Sep')
    expect(sepDates.length).toBeGreaterThanOrEqual(2)
  })

  it('displays locations and times', () => {
    render(<Shows />)

    expect(screen.getByText('Multiple Venues')).toBeInTheDocument()
    // Multiple 02:00PM times exist
    const times = screen.getAllByText('02:00PM')
    expect(times.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('The Fairmont Hotel: Jaipur')).toBeInTheDocument()
  })
})
