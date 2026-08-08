import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full page composition with landmark structure', () => {
    render(<App />)

    expect(document.title).toBe('Dealflow — CRM Template')

    expect(screen.getByRole('link', { name: /skip to main content/i })).toHaveAttribute(
      'href',
      '#main',
    )

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: 'Dealflow home' })).toBeInTheDocument()
    expect(
      within(banner).getAllByRole('link', { name: 'Start Free Trial' }).length,
    ).toBeGreaterThan(0)

    const main = screen.getByRole('main')
    const level1 = screen.getByRole('heading', { level: 1 })
    expect(level1.textContent).toMatch(/Close More Deals/)

    for (const heading of [
      'Everything You Need to Sell Smarter',
      'Trusted by Sales Leaders',
      'Talk to Our Sales Team',
      'Frequently Asked Questions',
      'Ready to Close More Deals?',
    ]) {
      expect(within(main).getByRole('heading', { level: 2, name: heading })).toBeInTheDocument()
    }

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(/© 2026 Dealflow/i)).toBeInTheDocument()
  })
})
