import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Roostly — Travel Booking Template')
  })

  it('renders a full-viewport booking section with a photo background and white wash', () => {
    render(<App />)

    const main = screen.getByRole('main')
    const section = main.querySelector('#booking') as HTMLElement
    expect(section).not.toBeNull()
    expect(section.className).toMatch(/min-h-screen/)
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/roostly-1/1920/1080')

    // Translucent white overlay wash (rgba(255,255,255,0.15) -> bg-white/15).
    const overlay = section.querySelector('[aria-hidden="true"]') as HTMLElement
    expect(overlay).not.toBeNull()
    expect(overlay.className).toMatch(/bg-white\/15/)
  })

  it('renders the booking form inside the main landmark', () => {
    const { container } = render(<App />)

    const main = screen.getByRole('main')
    expect(within(main).getByRole('button', { name: 'Check availability' })).toBeInTheDocument()

    const form = container.querySelector('form') as HTMLFormElement
    expect(form).not.toBeNull()
    expect(main.contains(form)).toBe(true)
  })

  it('renders no navbar, hero copy, or footer (single-section demo)', () => {
    render(<App />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument()
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })
})
