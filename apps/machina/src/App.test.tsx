import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('sets the document title', () => {
    vi.useFakeTimers()
    render(<App />)
    expect(document.title).toBe('Machina — Industrial & Manufacturing')
  })

  it('composes every section in the source order', () => {
    vi.useFakeTimers()
    render(<App />)

    // Top utility bar (phone also appears in the enquiry card)
    expect(screen.getAllByText('+880 278 367 367').length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Market leading')
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()

    // Section order: about → categories → CTA → testimonials → form → blog
    const level2Headings = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent)
    expect(level2Headings).toEqual([
      'We have all your needs, from micro macro',
      'To increase productivity and cost effectiveness on the market.',
      'Up to 40% Off',
      'Some amazing words from our clients',
      'Drop your message',
      'News & Media center',
      'Find Us',
    ])

    // Gallery, services, enquiry, map, logo CTA, footer
    expect(screen.getByRole('link', { name: 'Building Yead' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Mechanical Engineering' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Need to make an enquiry?' })).toBeInTheDocument()
    expect(screen.getByTitle('Machina location map')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /learn more/i }).length).toBeGreaterThanOrEqual(2)
    expect(screen.getByRole('link', { name: 'Colorlib' })).toBeInTheDocument()
  })
})
