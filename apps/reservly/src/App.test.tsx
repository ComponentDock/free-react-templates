import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Reservly — Book Your Stay')
  })

  it('composes navbar, hero, and footer landmarks', () => {
    const { container } = render(<App />)
    const banner = within(container.querySelector('header') as HTMLElement)
    expect(banner.getByText('Reservly')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toMatch(
      /make your reservation/i,
    )

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(/© 2026 Reservly/i)).toBeInTheDocument()
  })
})
