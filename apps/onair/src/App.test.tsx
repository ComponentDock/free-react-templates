import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    // Navbar
    expect(screen.getAllByRole('link', { name: /OnAir/ }).length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(
      screen.getByRole('heading', { level: 1, name: /Designed For Music/ }),
    ).toBeInTheDocument()

    // Blog
    expect(screen.getByRole('heading', { level: 2, name: /Blog New/ })).toBeInTheDocument()

    // Music Charts
    expect(screen.getByRole('heading', { level: 2, name: /Music Chart/ })).toBeInTheDocument()

    // Trending Video
    expect(screen.getByRole('heading', { level: 2, name: /Trending Video/ })).toBeInTheDocument()

    // App Download
    expect(screen.getByRole('heading', { level: 2, name: /Radio Music/ })).toBeInTheDocument()

    // Weekly Schedule
    expect(screen.getByRole('heading', { level: 2, name: /Weekly Schedule/ })).toBeInTheDocument()

    // Latest News
    expect(screen.getByRole('heading', { level: 2, name: /Latest News/ })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
