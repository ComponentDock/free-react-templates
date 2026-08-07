import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Keystone — Architecture Template')
  })

  it('composes the navbar, all sections in main, and the footer', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(within(main).getByRole('heading', { level: 1 })).toHaveTextContent(
      /Focus on Design Quality/,
    )
    expect(
      within(main).getByRole('heading', {
        level: 2,
        name: '52 Years of Experience in This Area',
      }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', {
        level: 2,
        name: 'We Provide the Best Interior Solution for You',
      }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', {
        level: 2,
        name: 'Our Best Recent Popular Work',
      }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', {
        level: 2,
        name: 'The Best Team We Have Ever Had',
      }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', {
        level: 2,
        name: 'All Recent Articles From Us',
      }),
    ).toBeInTheDocument()
  })

  it('renders the footer wordmark and copyright', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: /^Keystone/ })).toBeInTheDocument()
    expect(within(footer).getByText(/© 2026 Keystone\. All rights reserved/i)).toBeInTheDocument()
  })
})
