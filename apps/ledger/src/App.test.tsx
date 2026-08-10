import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the header, sections and footer landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(within(main).getByRole('img', { name: /All said replenish/ })).toBeInTheDocument()
    expect(
      within(main).getAllByRole('heading', { name: /Subdue lesser beast/ }).length,
    ).toBeGreaterThan(0)
    expect(screen.getAllByTestId('border-divider')).toHaveLength(2)
    expect(within(main).getByRole('link', { name: 'LOADING MORE' })).toBeInTheDocument()
    expect(within(main).getByRole('complementary', { name: /sidebar/i })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Ledger — Blog Template')
  })
})
