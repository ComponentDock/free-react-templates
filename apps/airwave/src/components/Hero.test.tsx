import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge, headline, blurb, and CTAs', () => {
    render(<Hero />)

    expect(screen.getByText('New Episode Every Tuesday')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Stories That Inspire Action/)
    expect(screen.getByText(/join us as we dive deep/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Listen Latest Episode' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders the four platform pill links with brand icons', () => {
    render(<Hero />)

    expect(screen.getByText('Available on:')).toBeInTheDocument()
    for (const name of ['Spotify', 'Apple Podcasts', 'Google Podcasts', 'YouTube']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })

  it('renders the stats row with red values', () => {
    render(<Hero />)

    const stats = screen.getByTestId('hero-stats')
    expect(within(stats).getByText('500+')).toBeInTheDocument()
    expect(within(stats).getByText('2M+')).toBeInTheDocument()
    expect(within(stats).getByText('Top 50')).toBeInTheDocument()
    expect(within(stats).getByText('4.8')).toBeInTheDocument()
    expect(within(stats).getByText('Episodes Published')).toBeInTheDocument()
    expect(within(stats).getByText('Total Downloads')).toBeInTheDocument()
    expect(within(stats).getByText('Countries Reached')).toBeInTheDocument()
    expect(within(stats).getByText('Average Rating')).toBeInTheDocument()
  })
})
