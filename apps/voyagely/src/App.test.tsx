import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the Voyagely branding', () => {
    render(<App />)

    expect(document.title).toBe('Voyagely — Travel Booking Template')
  })

  it('renders a full-viewport hero with a cover photo background', () => {
    const { container } = render(<App />)

    const section = container.querySelector('section#hero') as HTMLElement
    expect(section).not.toBeNull()
    // Seeded placeholder recreating the source Hawaii photo (no copied asset).
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/voyagely-hero/1461/973')
    expect(section.className).toMatch(/min-h-screen/)
    expect(section.className).toMatch(/bg-cover/)
    expect(section.className).toMatch(/bg-center/)
    expect(section.className).toMatch(/bg-no-repeat/)
  })

  it('renders the header with the VOYAGELY wordmark and a grid menu icon', () => {
    const { container } = render(<App />)

    const header = container.querySelector('header') as HTMLElement
    expect(header).not.toBeNull()
    // Source .header: flex, space-between, align-items center, padding 50px 57px.
    expect(header.className).toMatch(/justify-between/)
    expect(header.className).toMatch(/items-center/)
    expect(header.className).toMatch(/px-\[57px\]/)
    expect(header.className).toMatch(/py-\[50px\]/)

    const wordmark = screen.getByText('VOYAGELY')
    expect(wordmark.className).toMatch(/font-bold/)
    expect(wordmark.className).toMatch(/uppercase/)
    expect(wordmark.className).toMatch(/text-white/)

    expect(screen.getByLabelText('Menu')).toBeInTheDocument()
  })

  it('renders NO navbar or footer (one-section form demo)', () => {
    const { container } = render(<App />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument()
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelector('main')).not.toBeNull()
  })
})
