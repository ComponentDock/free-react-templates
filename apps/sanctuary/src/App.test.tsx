import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, sections and footer in landmarks', () => {
    render(<App />)

    expect(document.title).toBe('Sanctuary — Church Template')

    const banner = screen.getByRole('banner')
    expect(banner).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    for (const heading of [
      'A Place to Belong',
      'Service Times',
      'Who We Are',
      'Upcoming Events',
      'Get Connected',
      'Recent Sermons',
      'Stories of Faith',
      "You're Welcome Here",
    ]) {
      // Some headings repeat in the footer (e.g. "Service Times")
      expect(
        screen.getAllByRole('heading', { name: new RegExp(heading) }).length,
      ).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
