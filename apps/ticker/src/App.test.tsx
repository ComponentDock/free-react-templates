import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the ticker bar, navbar, all sections, and the footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Ticker — Trading Education Template')

    const banner = screen.getByRole('banner')
    // The banner landmark holds the ticker bar and the navigation
    // (ticker items are duplicated for the seamless marquee loop)
    expect(within(banner).getAllByText('BTC').length).toBeGreaterThan(0)
    expect(within(banner).getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('Learn to Trade from Millionaire Mentors')

    const expectedH2s = [
      'Choose Your Market',
      'Master the Markets',
      'Learn from Millionaire Traders',
      'Traders Who Changed Their Lives',
      'Invest in Your Trading Future',
      'Common Questions',
      'Ready to Start Your Trading Journey?',
    ]
    for (const name of expectedH2s) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
    }

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('defaults to dark mode', () => {
    render(<App />)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
