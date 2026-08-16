import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CausesCarousel } from './CausesCarousel'
import { causes } from '../data'

describe('CausesCarousel', () => {
  it('renders the section heading and kicker', () => {
    render(<CausesCarousel />)
    expect(screen.getByRole('heading', { name: 'Causes we are serving' })).toBeInTheDocument()
    expect(screen.getByText(/Kinds of Causes/i)).toBeInTheDocument()
  })

  it('renders a card for each visible cause with title, copy and progress', () => {
    render(<CausesCarousel />)
    const visible = causes.slice(0, 3)
    for (const cause of visible) {
      expect(screen.getByRole('heading', { name: cause.title })).toBeInTheDocument()
      expect(screen.getAllByText(cause.copy).length).toBeGreaterThan(0)
    }
    // progress bars: one per visible card
    expect(screen.getAllByRole('progressbar')).toHaveLength(3)
  })

  it('shows goal and raised amounts with a Donate link per card', () => {
    render(<CausesCarousel />)
    const donateLinks = screen.getAllByRole('link', { name: 'Donate' })
    expect(donateLinks).toHaveLength(3)
    expect(donateLinks[0]).toHaveAttribute('href', '#donate')
    // first cause: $67,845 Goal / $48,845 Raised
    expect(screen.getByText(/\$67,845/)).toBeInTheDocument()
    expect(screen.getByText(/\$48,845/)).toBeInTheDocument()
  })

  it('cycles cards with the next and previous arrows', async () => {
    const user = userEvent.setup()
    render(<CausesCarousel />)
    const next = screen.getByRole('button', { name: 'Next causes' })
    const visibleTitles = () =>
      screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(visibleTitles()).toEqual(causes.slice(0, 3).map((c) => c.title))
    await user.click(next)
    expect(visibleTitles()).toEqual(causes.slice(1, 4).map((c) => c.title))
    await user.click(screen.getByRole('button', { name: 'Previous causes' }))
    expect(visibleTitles()).toEqual(causes.slice(0, 3).map((c) => c.title))
  })
})
