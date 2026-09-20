import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(document.title).toBe('Meetuply — Event Conference Landing Page Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Meetup').length).toBeGreaterThanOrEqual(1)
    expect(
      screen.getByRole('heading', { level: 1, name: /Developer Conference 2025/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Our Speakers')).toBeInTheDocument()
    expect(screen.getByText('Event Schedule')).toBeInTheDocument()
    expect(screen.getByText('Ticket Pricing')).toBeInTheDocument()
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    expect(screen.getByText('Subscribe to our Newsletter')).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const links = screen.getAllByRole('link', { name: /Component Dock/i })
    expect(links.length).toBeGreaterThanOrEqual(1)
  })
})
