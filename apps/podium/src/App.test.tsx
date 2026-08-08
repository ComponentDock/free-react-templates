import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Podium — Tech Conference Template')
  })

  it('composes every section with landmarks and a skip link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /skip to main content/i })).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /The Premier Technology Conference/i,
    )
    expect(screen.getByRole('heading', { name: 'Learn From the Best' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Event Schedule' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get Your Tickets' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Proudly Sponsored By' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Event Venue' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "Don't Miss Out" })).toBeInTheDocument()
  })
})
