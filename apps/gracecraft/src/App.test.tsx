import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // TopBar
    expect(screen.getAllByText(/infogracecraft@gmail.com/).length).toBeGreaterThanOrEqual(1)
    // Header
    expect(screen.getAllByRole('link', { name: /gracecraft/i }).length).toBeGreaterThanOrEqual(1)
    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Belief in God/)
    // EventBanner
    expect(screen.getByText(/UPCOMING EVENT/)).toBeInTheDocument()
    // About
    expect(screen.getByRole('heading', { name: /welcome to our church/i })).toBeInTheDocument()
    // Sermons
    expect(screen.getByRole('heading', { name: /sermons today/i })).toBeInTheDocument()
    // Mission
    expect(screen.getAllByText(/our mission/i).length).toBeGreaterThanOrEqual(1)
    // Events
    expect(screen.getByRole('heading', { name: /upcoming events/i })).toBeInTheDocument()
    // Donations
    expect(
      screen.getByRole('heading', { name: /help children get an education/i }),
    ).toBeInTheDocument()
    // Quote
    expect(screen.getByText(/Wherever the bishop appears/)).toBeInTheDocument()
    // Gallery
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(10)
    // LatestNews
    expect(screen.getByRole('heading', { name: /latest news/i })).toBeInTheDocument()
    // Footer
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
