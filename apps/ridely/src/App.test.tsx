import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Ridely — Taxi Booking Form Template')
  })

  it('renders the full-viewport booking section with the centered dark card', () => {
    const { container } = render(<App />)

    const main = screen.getByRole('main')
    const section = main.querySelector('#booking') as HTMLElement
    expect(section).not.toBeNull()
    expect(section.className).toMatch(/min-h-screen/)
    expect(section.className).toMatch(/items-center/)
    expect(section.className).toMatch(/justify-center/)
    // White page behind the card: the section sets no background.
    expect(section.className).not.toMatch(/bg-/)

    const card = section.querySelector('div.relative') as HTMLElement
    expect(card).not.toBeNull()
    expect(card.className).toMatch(/max-w-\[768px\]/)
    expect(card.className).toMatch(/bg-coal/)

    const form = container.querySelector('form') as HTMLFormElement
    expect(form).not.toBeNull()
    expect(section.contains(form)).toBe(true)
  })

  it('does not render a navbar or a footer (single-section demo)', () => {
    render(<App />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument()
  })
})
