import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { act, render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Gavel — Law Firm Template')
  })

  it('composes the page with proper landmarks', () => {
    render(<App />)
    const header = screen.getByRole('banner')
    expect(within(header).getByRole('link', { name: /Gavel/ })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders every section in the reference order', () => {
    render(<App />)
    act(() => {
      vi.advanceTimersByTime(2000)
    })

    const main = screen.getByRole('main')
    const headings = within(main).getAllByRole('heading', { level: 2 })
    const order = headings.map((heading) => heading.textContent)
    expect(order).toEqual([
      'We Always Fight For Your Justice to Win',
      'Practice Areas',
      'Our Legal Attorneys',
      'Free Consultation',
      '1000+ Completed Cases Successfully',
      'Happy Clients',
      'Recent Blog',
      'Subscribe to our Newsletter',
    ])

    expect(
      within(main).getByRole('heading', {
        level: 1,
        name: 'The Greatest & Strongest Firm You Can Trust',
      }),
    ).toBeInTheDocument()
  })
})
