import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, error section, and footer and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Sky — Error Page Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toMatch(/404/)
    expect(within(main).getByRole('heading', { level: 2 }).textContent).toMatch(
      /the page you requested could not found/i,
    )
    expect(within(main).getByRole('textbox', { name: 'Search' })).toBeInTheDocument()
    expect(within(main).getByRole('button', { name: 'Search' })).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
