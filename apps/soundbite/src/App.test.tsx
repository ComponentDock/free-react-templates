import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the full page composition', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Episodes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Meet Your Host' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Proudly Supported By' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Listeners Say' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Never Miss an Episode' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Let.s Connect/ })).toBeInTheDocument()
  })

  it('renders footer, mobile CTA, and scroll progress', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getAllByRole('link', { name: 'Subscribe' }).length).toBeGreaterThan(0)
    expect(
      screen
        .getAllByRole('link', { name: 'Subscribe' })
        .some((l) => l.getAttribute('href') === '#newsletter'),
    ).toBe(true)
    expect(screen.getByRole('progressbar', { name: 'Reading progress' })).toBeInTheDocument()
  })
})
