import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Finflow — Finance & Banking Template')
  })

  it('composes every section with landmarks and headings', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Banking Solutions/i, level: 1 }),
    ).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Why Choose Us/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Banking Solutions Is Our Priority/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Meet Team/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Gallery/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /How It Works/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Happy Customers/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Pricing/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Frequently Asked Questions/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Blog/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Contact Us/i })).toBeInTheDocument()
  })
})
