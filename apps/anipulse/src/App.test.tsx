import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import {
  BRAND,
  NAV_LINKS,
  HERO_SLIDES,
  TRENDING_SHOWS,
  POPULAR_SHOWS,
  RECENT_SHOWS,
  LIVE_ACTION_SHOWS,
} from './data'

describe('App', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Anipulse — Anime Streaming Template')
  })

  it('renders the navbar with brand', () => {
    render(<App />)
    expect(screen.getAllByText(BRAND).length).toBeGreaterThan(0)
  })

  it('renders navigation links', () => {
    render(<App />)
    for (const link of NAV_LINKS) {
      expect(screen.getAllByText(link.label).length).toBeGreaterThan(0)
    }
  })

  it('renders the hero carousel with first slide', () => {
    render(<App />)
    // Category may appear in hero badge and genre tags, use getAllByText
    expect(screen.getAllByText(HERO_SLIDES[0]!.category).length).toBeGreaterThan(0)
    expect(screen.getByText(HERO_SLIDES[0]!.title)).toBeInTheDocument()
  })

  it('renders Trending Now section', () => {
    render(<App />)
    expect(screen.getByText('Trending Now')).toBeInTheDocument()
    for (const show of TRENDING_SHOWS) {
      // Some titles may appear in sidebar too
      expect(screen.getAllByText(show.title).length).toBeGreaterThan(0)
    }
  })

  it('renders Popular Shows section', () => {
    render(<App />)
    expect(screen.getByText('Popular Shows')).toBeInTheDocument()
    for (const show of POPULAR_SHOWS) {
      expect(screen.getAllByText(show.title).length).toBeGreaterThan(0)
    }
  })

  it('renders Recently Added Shows section', () => {
    render(<App />)
    expect(screen.getByText('Recently Added Shows')).toBeInTheDocument()
    for (const show of RECENT_SHOWS) {
      expect(screen.getAllByText(show.title).length).toBeGreaterThan(0)
    }
  })

  it('renders Live Action section', () => {
    render(<App />)
    expect(screen.getByText('Live Action')).toBeInTheDocument()
    for (const show of LIVE_ACTION_SHOWS) {
      expect(screen.getAllByText(show.title).length).toBeGreaterThan(0)
    }
  })

  it('renders the sidebar with Top Views', () => {
    render(<App />)
    expect(screen.getByText('Top Views')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
