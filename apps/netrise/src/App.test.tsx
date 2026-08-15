import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all template sections in order', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Everything you get what you need/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Search You Domain Name' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'The WebHost Guarantee' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Best Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us?' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Our satisfied customer says' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'How it works' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Clients' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/ })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Netrise — Web Hosting Template')
  })
})
