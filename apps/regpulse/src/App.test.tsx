import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the booking form, card, and footer, and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Regpulse — Dinner Event Booking')

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /booking place for your dinner/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('form', { name: /dinner booking form/i })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
