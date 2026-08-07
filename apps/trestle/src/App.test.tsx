import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Trestle — Architecture Template')
  })

  it('composes the navbar, all sections in main, and the footer', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(within(main).getByRole('heading', { level: 1 })).toHaveTextContent(
      /Minimalistic Architecture and more/,
    )
    expect(
      within(main).getByRole('heading', {
        level: 2,
        name: /We are a creative Architecture Studio/,
      }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { level: 2, name: 'Services' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: /Dare to dream of a modern home/ }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { level: 2, name: 'Projects' })).toBeInTheDocument()
  })

  it('renders the footer wordmark and copyright', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: /^Trestle/ })).toBeInTheDocument()
    expect(within(footer).getByText(/© 2026 Trestle\. All rights reserved/i)).toBeInTheDocument()
  })
})
