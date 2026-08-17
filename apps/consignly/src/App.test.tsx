import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Consignly — Logistics Template')
  })

  it('composes all sections in order with proper landmarks', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(
      within(banner).getByRole('heading', { level: 1, name: 'Find logistic services' }),
    ).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(within(main).getByRole('region', { name: 'Services' })).toBeInTheDocument()
    expect(within(main).getByRole('region', { name: 'About' })).toBeInTheDocument()
    expect(within(main).getByRole('region', { name: 'Call to action' })).toBeInTheDocument()

    const feedback = within(main).getByRole('region', { name: 'Customer feedback' })
    expect(
      within(feedback).getByRole('heading', { level: 2, name: 'Happy Customer' }),
    ).toBeInTheDocument()
    expect(
      within(feedback).getByRole('heading', { level: 2, name: 'Why Choose Us' }),
    ).toBeInTheDocument()

    const blog = within(main).getByRole('region', { name: 'Blog' })
    expect(within(blog).getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()

    expect(within(banner).getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
