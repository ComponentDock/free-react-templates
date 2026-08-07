import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Halcyon — Spa & Wellness Template')
  })

  it('composes the navbar, all sections in main, and the footer', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(within(main).getByRole('heading', { level: 1 })).toHaveTextContent('Spa Which You Love')
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Halcyon Spa & Wellness' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Our Services' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Get 20% discount' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Spa Features' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Testimonials' }),
    ).toBeInTheDocument()
    expect(within(main).getAllByRole('blockquote').length).toBeGreaterThanOrEqual(2)
  })

  it('renders the footer wordmark and copyright', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: /^Halcyon/ })).toBeInTheDocument()
    expect(within(footer).getByText(/© 2026 All rights reserved/i)).toBeInTheDocument()
  })
})
