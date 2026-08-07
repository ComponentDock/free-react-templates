import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Archon — Architecture Template')
  })

  it('composes the navbar, all sections in main, and the footer', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(within(main).getByRole('heading', { level: 1 })).toHaveTextContent(
      /Awesome free HTML template/,
    )
    expect(within(main).getByRole('heading', { level: 2, name: 'Get Quote' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Structures that speak to the sky' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', {
        level: 2,
        name: 'Everything a building needs, under one roof',
      }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Keep up to date' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Testimonials' }),
    ).toBeInTheDocument()
    expect(within(main).getAllByRole('blockquote').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the footer wordmark and copyright', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: /^Archon/ })).toBeInTheDocument()
    expect(within(footer).getByText(/© 2026 Archon\. All rights reserved/i)).toBeInTheDocument()
  })
})
