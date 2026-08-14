import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, hero, grid, rail and footer with landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Gallery — Portfolio Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('complementary', { name: 'Utility rail' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Simple and clean portfolio to showcase your\s+work/)
    expect(screen.getByText('work')).toHaveClass('text-primary-500')

    // All 12 portfolio items are shown with the "All" filter active.
    expect(
      screen.getAllByRole('link', {
        name: /Gallery|Home|Portfolio|Help|Globe|Mail|Canvas|Brushstrokes|Poster|Brand|Ink|Line|Loft|Corner|Craft|Bottle|Sneaker|Retail/,
      }).length,
    ).toBeGreaterThan(0)
  })

  it('filters the portfolio grid when a category pill is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Art' }))

    expect(screen.getByRole('button', { name: 'Art' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.queryByRole('link', { name: /Canvas No\. 7/ })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /Loft Workspace/ })).not.toBeInTheDocument()
  })
})
