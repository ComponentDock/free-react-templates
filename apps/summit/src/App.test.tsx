import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title and composes every section in order', () => {
    render(<App />)
    expect(document.title).toBe('Summit — Conference & Event')
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    /* Section markers in DOM order. */
    expect(screen.getAllByRole('link', { name: 'Summit home' }).length).toBeGreaterThan(0)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Science Conference' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Welcome to the Project Management' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: /Who’s Speaking/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Schedule Plan' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Ticket Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Official Sponsor' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Latest News' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Contact Us' })).toBeInTheDocument()

    const headings = screen.getAllByRole('heading', { level: 4 })
    const scheduleIndex = headings.findIndex((h) => h.textContent === 'Schedule Plan')
    const newsIndex = headings.findIndex((h) => h.textContent === 'Latest News')
    expect(scheduleIndex).toBeGreaterThanOrEqual(0)
    expect(newsIndex).toBeGreaterThan(scheduleIndex)
  })
})
