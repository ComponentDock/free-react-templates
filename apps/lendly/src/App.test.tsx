import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in DOM order', () => {
    render(<App />)
    const headings = screen
      .getAllByRole('heading', { level: 2, hidden: true })
      .map((h) => h.textContent)
    expect(headings).toEqual(
      expect.arrayContaining([
        'Looking for a same day loan?',
        'Why Choose us?',
        expect.stringContaining('Already have a'),
        'Get a personal loan from just 8.5% APR',
        'Get aproved in minutes after you apply online',
        'How a personal loan can help',
        "We're here to help",
        'Calculate my Score',
        'What we do',
      ]),
    )
    expect(screen.getAllByRole('link', { name: /Component Dock/i })).not.toHaveLength(0)
  })
})
