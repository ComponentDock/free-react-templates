import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Earworm — Podcast & Audio Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByText('Subscribe Today')).toBeInTheDocument()
    // "Latest Episodes" appears in both section heading and footer heading
    expect(
      screen.getAllByRole('heading', { name: 'Latest Episodes' }).length,
    ).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { name: 'Featured Guests' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Sign Up To Newsletter' })).toBeInTheDocument()
  })
})
