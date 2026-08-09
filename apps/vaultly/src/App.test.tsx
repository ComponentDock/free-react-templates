import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the document title and all sections in the exact spec order', () => {
    render(<App />)

    expect(document.title).toBe('Vaultly — AI Financial Advisor')

    const headings = screen.getAllByRole('heading').map((heading) => heading.textContent)
    expect(headings).toContain('Your Personal AI Financial Advisor')
    expect(headings).toContain('Everything You Need to Build Wealth')
    expect(headings).toContain('Get Started in Minutes')
    expect(headings).toContain('Your Complete Financial Picture')
    expect(headings).toContain('Loved by 150,000+ Users')
    expect(headings).toContain('Simple, Transparent Pricing')
    expect(headings).toContain('Frequently Asked Questions')
    expect(headings).toContain('Ready to Take Control of Your Finances?')
  })

  it('provides a skip link and a main landmark', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Skip to content' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders the banner, main, and contentinfo landmarks in order', () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    const main = screen.getByRole('main')
    const contentinfo = screen.getByRole('contentinfo')

    expect(banner.compareDocumentPosition(main)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
    expect(main.compareDocumentPosition(contentinfo)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
  })
})
