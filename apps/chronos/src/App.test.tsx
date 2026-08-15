import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { App } from './App'

afterEach(() => {
  vi.useRealTimers()
})

describe('App', () => {
  it('renders the pale blue-grey page background with the section heading', () => {
    const { container } = render(<App />)
    expect(container.firstElementChild?.className).toContain('bg-page')
    const heading = screen.getByRole('heading', { level: 2, name: 'Today' })
    expect(heading).toBeInTheDocument()
  })

  it('renders the date card with all four pieces derived from the current date', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-08-15T12:00:00'))
    render(<App />)
    expect(screen.getByText('Saturday')).toBeInTheDocument()
    expect(screen.getByText('August')).toBeInTheDocument()
    expect(screen.getByText('15th')).toBeInTheDocument()
    // "2026" appears in both the card's year band and the footer copyright
    expect(screen.getAllByText('2026').length).toBeGreaterThan(0)
  })

  it('renders the footer with the Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
