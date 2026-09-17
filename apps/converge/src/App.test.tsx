import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer', () => {
    render(<App />)

    // Navbar
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByText('converge').length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByText('2025')).toBeInTheDocument()
    expect(screen.getByText('Marketing Conference')).toBeInTheDocument()

    // Countdown
    expect(screen.getByTestId('days')).toBeInTheDocument()
    expect(screen.getByTestId('hours')).toBeInTheDocument()

    // Intro
    expect(
      screen.getByRole('heading', { level: 2, name: /best marketing conference/i }),
    ).toBeInTheDocument()

    // Topics
    expect(screen.getByRole('heading', { level: 2, name: /the topics/i })).toBeInTheDocument()

    // Schedule
    expect(screen.getByRole('heading', { level: 2, name: /schedule/i })).toBeInTheDocument()

    // Speakers
    expect(screen.getByRole('heading', { level: 2, name: /speakers/i })).toBeInTheDocument()

    // CTA
    expect(
      screen.getByRole('heading', { level: 2, name: /get your tickets now/i }),
    ).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
