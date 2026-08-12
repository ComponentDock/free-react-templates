import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Cargoly — Logistics & Freight')
  })

  it('composes all sections in the original order', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Cargoly' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    const sections = within(main).getAllByRole('region')
    expect(sections.map((section) => section.getAttribute('aria-label'))).toEqual([
      'Hero',
      'About',
      'Services',
      'Call to action',
      'Delivery process',
      'Quote request',
      'Recent deliveries',
      'Latest blog',
    ])
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
