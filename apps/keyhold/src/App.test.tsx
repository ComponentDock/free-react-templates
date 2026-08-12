import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Keyhold — Real Estate Template')
  })

  it('composes every section in the source order', () => {
    render(<App />)

    expect(screen.getByRole('navigation', { name: /main/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /find properties that make you money/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Exclusive Offer For You' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us?' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Find Properties In Your City' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Happy Clients' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Agents' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
