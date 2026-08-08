import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

beforeEach(() => {
  window.localStorage.clear()
  document.documentElement.classList.remove('dark')
})

describe('App', () => {
  it('composes the ticker, navbar, all sections, and footer with correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Tradewell — Investing Template')

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('Invest Smarter')

    const expectedH2s = [
      'Everything You Need to Invest Confidently',
      'Trade Multiple Asset Classes',
      'Your Assets Are Protected & Secure',
      'Simple, Transparent Pricing',
      'Loved by 12 Million+ Investors',
      'Frequently Asked Questions',
      'Ready to Start Building Wealth?',
    ]
    for (const name of expectedH2s) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
    }

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('defaults to light mode', () => {
    render(<App />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('tradewell-theme')).toBe('light')
  })

  it('renders the market ticker bar', () => {
    render(<App />)

    expect(screen.getAllByText('SPY').length).toBeGreaterThan(0)
    expect(screen.getByText('Markets Open')).toBeInTheDocument()
  })

  it('renders without IntersectionObserver errors', () => {
    vi.stubGlobal('IntersectionObserver', undefined)
    render(<App />)

    expect(screen.getByRole('main')).toBeInTheDocument()
    vi.unstubAllGlobals()
  })
})
