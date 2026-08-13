import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, vi } from 'vitest'
import { App } from './App'

describe('App', () => {
  // The Stats count-up and the testimonial carousel start intervals on mount;
  // fake timers keep the render deterministic.
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('sets the document title and renders every section in order', () => {
    render(<App />)

    expect(document.title).toBe('Skyward — Web Hosting Template')

    const headings = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)
    expect(headings).toEqual([
      'Why You Should Choose Us',
      'More than 12,000 websites trusted hosted',
      'Our Main Services',
      'Our Best Pricing',
      'Our satisfied customer says',
      'Recent Blog',
    ])

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 })).toBeInTheDocument()

    expect(screen.getByRole('navigation', { name: /main/i })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
