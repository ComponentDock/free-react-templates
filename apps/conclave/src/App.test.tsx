import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title and composes every section in order', () => {
    render(<App />)
    expect(document.title).toBe('Conclave — UX Conference 2025')
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    /* Section markers in DOM order. */
    expect(screen.getAllByRole('link', { name: 'Conclave home' }).length).toBeGreaterThan(0)
    expect(screen.getByText('UX Conference 2025')).toBeInTheDocument()
    expect(screen.getByText('Innovative With Experience UX Design 2025')).toBeInTheDocument()
    expect(screen.getByText('Conclave Features')).toBeInTheDocument()
    expect(screen.getByText("Who's Speaking")).toBeInTheDocument()
    expect(screen.getByText('Schedule Plan')).toBeInTheDocument()
    expect(screen.getByText('Ticket Pricing')).toBeInTheDocument()
    expect(screen.getByText('Official Sponsors')).toBeInTheDocument()
    expect(screen.getByText('Event Gallery')).toBeInTheDocument()
    expect(screen.getByText('Latest News')).toBeInTheDocument()

    const headings = screen.getAllByRole('heading', { level: 2 })
    const scheduleIndex = headings.findIndex((h) => h.textContent === 'Schedule Plan')
    const newsIndex = headings.findIndex((h) => h.textContent === 'Latest News')
    expect(scheduleIndex).toBeGreaterThanOrEqual(0)
    expect(newsIndex).toBeGreaterThan(scheduleIndex)
  })
})
