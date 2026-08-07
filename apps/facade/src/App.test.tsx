import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Facade — Architecture Template')
  })

  it('composes the navbar, all sections in main, and the footer', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(within(main).getByRole('heading', { level: 1 })).toHaveTextContent(/Future Architechure/)
    for (const heading of ['Happy Clients', 'We are world number one Company']) {
      expect(within(main).getByRole('heading', { level: 2, name: heading })).toBeInTheDocument()
    }
    expect(
      within(main).getAllByRole('heading', { level: 2, name: 'View Our Project' }).length,
    ).toBeGreaterThanOrEqual(1)
  })

  it('renders the footer wordmark and copyright', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: /^Facade/ })).toBeInTheDocument()
    expect(within(footer).getByText(/© 2026 Facade\. All rights reserved/i)).toBeInTheDocument()
  })
})
