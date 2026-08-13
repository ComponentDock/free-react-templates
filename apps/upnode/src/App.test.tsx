import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Upnode — Web Hosting Template')
  })

  it('starts with a skip link and composes every section in the reference order', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Skip to main content' })).toBeInTheDocument()
    const headings = screen.getAllByRole('heading').map((h) => h.textContent)
    expect(headings).toEqual([
      'The Best Web Hosting',
      'Starting at $7.99 $2.95/month*',
      'Find Your Perfect Domain Name',
      'Overall Features',
      'Auto Updates',
      'Optimized Software',
      'Daily Backups',
      'Wide Networking',
      'Protected',
      'Free Support',
      'Choose Your Web Hosting Plan',
      'Standard Hosting',
      'Advanced Hosting',
      'Unlimited Hosting',
      'Up to 70% Discount with FREE Domain Name Registration Included!',
      'Need help? Call our award-winning support team 24/7: +65 1234-6868',
      'Proudly Hosting Over 800,000 Websites Since 2000',
      'Products',
      'Programs',
      'Company',
      'Subscribe Newsletter',
    ])
  })

  it('renders the banner, main, and contentinfo landmarks', () => {
    const { container } = render(<App />)
    expect(container.querySelector('header')).toBeInTheDocument()
    expect(container.querySelector('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Upnode' })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /More templates at Component Dock/ }),
    ).toBeInTheDocument()
  })
})
