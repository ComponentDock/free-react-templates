import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Atrium — Architecture Template')
  })

  it('composes the navbar, all sections in main, and the footer', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(within(main).getByRole('heading', { level: 1 })).toHaveTextContent(
      'We Design Your Space',
    )
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Architectural Plan Design and Build' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Make Your Dream with Us' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Our Latest Projects' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Send Your Message' }),
    ).toBeInTheDocument()
    expect(within(main).getAllByRole('blockquote').length).toBe(3)
  })

  it('renders the footer wordmark and copyright', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: /^Atrium/ })).toBeInTheDocument()
    expect(within(footer).getByText(/© 2026 Atrium\. All rights reserved/i)).toBeInTheDocument()
  })
})
