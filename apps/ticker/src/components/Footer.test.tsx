import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand blurb and logo', () => {
    render(<Footer />)

    expect(screen.getByText('Ticker')).toBeInTheDocument()
    expect(screen.getByText(/Trading education from millionaire mentors/)).toBeInTheDocument()
  })

  it('shows the four link columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'Markets' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Popular Courses' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Company' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Legal' })).toBeInTheDocument()

    // Markets column links
    for (const name of ['Cryptocurrency', 'Stock Trading', 'Forex', 'Options Trading']) {
      expect(screen.getAllByRole('link', { name }).length).toBeGreaterThanOrEqual(1)
    }
    // Popular Courses links (Algo Trading is unique to this column)
    expect(screen.getByRole('link', { name: 'Algo Trading' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Crypto Trading' })).toBeInTheDocument()
    // Company + Legal links
    for (const name of ['About', 'Mentors', 'Careers', 'Contact']) {
      expect(screen.getAllByRole('link', { name }).length).toBeGreaterThanOrEqual(1)
    }
    for (const name of ['Terms of Service', 'Privacy Policy', 'Disclaimer']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })

  it('shows the copyright line and the trading-risk disclaimer', () => {
    render(<Footer />)

    expect(screen.getByText(/© 2026 Ticker\. All rights reserved\./)).toBeInTheDocument()
    expect(screen.getByText(/Trading involves significant risk of loss/)).toBeInTheDocument()
  })

  it('shows the social links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Ticker on Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Ticker on LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Ticker on GitHub' })).toBeInTheDocument()
  })
})
