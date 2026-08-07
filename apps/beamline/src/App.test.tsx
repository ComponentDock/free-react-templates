import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Beamline — Architecture Template')
  })

  it('composes the navbar, all sections in main, and the footer', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(within(main).getByRole('heading', { level: 1 })).toHaveTextContent(
      /Modern Innovative Architecture/,
    )
    for (const heading of [
      'Our Unique Latest Projects',
      'Happy Clients',
      'Price & Plans',
      'Recent Blog',
    ]) {
      expect(within(main).getByRole('heading', { level: 2, name: heading })).toBeInTheDocument()
    }
  })

  it('renders the footer wordmark and copyright', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: /^Beamline/ })).toBeInTheDocument()
    expect(within(footer).getByText(/© 2026 Beamline\. All rights reserved/i)).toBeInTheDocument()
  })
})
