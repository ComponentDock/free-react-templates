import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Foundry — Construction Template')
  })

  it('composes the navbar, all sections in main, and the footer', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(within(main).getByRole('heading', { level: 1 })).toHaveTextContent(
      /Providing all Kinds of Construction Services/,
    )
    for (const heading of [
      'Secrets of Success of Our Projects',
      'Our Done Projects',
      'We Offer Services',
      'Read Our Blog',
      'Our Engineers',
      'What Our Client Says',
      'Sign up for a Newsletter',
    ]) {
      expect(within(main).getByRole('heading', { level: 2, name: heading })).toBeInTheDocument()
    }
  })

  it('renders the footer wordmark and copyright', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: /^Foundry/ })).toBeInTheDocument()
    expect(within(footer).getByText(/© 2026 Foundry\. All rights reserved/i)).toBeInTheDocument()
  })
})
