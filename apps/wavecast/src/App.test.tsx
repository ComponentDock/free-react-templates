import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Wavecast — Podcast Template')
  })

  it('composes all sections inside a single main landmark, in order', () => {
    render(<App />)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    // Header brand first.
    expect(within(main).getByRole('link', { name: 'Wavecast.' })).toBeInTheDocument()

    // Hero.
    expect(
      within(main).getByRole('heading', {
        name: 'Tell Your Story to the World',
      }),
    ).toBeInTheDocument()

    // Episodes: sidebar heading + five cards.
    expect(within(main).getByRole('heading', { name: 'Popular Podcaster' })).toBeInTheDocument()
    expect(
      within(main).getAllByRole('heading', {
        name: /Episode 0\d: How To Create Web Page Using Bootstrap 4/,
      }),
    ).toHaveLength(5)

    // Featured guests.
    expect(within(main).getByRole('region', { name: 'Featured guests' })).toBeInTheDocument()

    // Subscribe band heading + footer subscribe column heading.
    expect(within(main).getAllByRole('heading', { name: 'Subscribe' })).toHaveLength(2)

    // Footer with the Component Dock link.
    expect(within(main).getByRole('contentinfo')).toBeInTheDocument()
    expect(within(main).getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
