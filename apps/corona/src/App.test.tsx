import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Corona — Education Website Template')
  })

  it('composes the navbar banner, all sections in main, and the footer contentinfo', () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: 'Corona' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    // Every section heading appears in the main landmark, in order.
    // (JSX <br/> collapses spaces in accessible names — match textContent.)
    const h2s = within(main)
      .getAllByRole('heading', { level: 2 })
      .map((h) => h.textContent ?? '')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toMatch(
      /Take the first step/,
    )
    expect(within(main).getByRole('heading', { level: 3, name: 'New Classes' })).toBeInTheDocument()
    expect(h2s.join(' ')).toMatch(/Popular Courses\s*Available Right Now/)
    expect(h2s.join(' ')).toMatch(/Watch Our Trainers/)
    expect(h2s.join(' ')).toMatch(/Features That Can Avail By Everyone/)
    expect(h2s.join(' ')).toMatch(/Courses for Free/)
    expect(
      within(main).getByRole('heading', { level: 3, name: 'Fanny Spencer' }),
    ).toBeInTheDocument()
    expect(h2s.join(' ')).toMatch(/Latest Posts From Our Blog/)

    const contentinfo = screen.getByRole('contentinfo')
    expect(
      within(contentinfo).getByRole('heading', { level: 3, name: 'Newsletter' }),
    ).toBeInTheDocument()
    expect(within(contentinfo).getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
