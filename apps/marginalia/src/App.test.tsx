import { render, screen, within } from '@testing-library/react'
import { describe, expect, it, beforeEach } from 'vitest'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Marginalia — Blog Template')
  })

  it('composes the navbar in the banner, sections in main, and the footer in contentinfo', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: 'Marginalia' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(within(main).getAllByRole('article').length).toBeGreaterThanOrEqual(4)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the share rail fixed on the right edge', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Share on Facebook' })).toBeInTheDocument()
  })
})
