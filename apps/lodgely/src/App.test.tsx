import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Lodgely — Hotel Booking Widget Template')
  })

  it('renders the full-viewport booking section with photo background, heavy scrim and centered panel', () => {
    const { container } = render(<App />)

    const main = screen.getByRole('main')
    const section = main.querySelector('#booking') as HTMLElement
    expect(section).not.toBeNull()
    expect(section.className).toMatch(/h-screen/)
    expect(section.className).toMatch(/bg-cover/)
    expect(section.className).toMatch(/bg-center/)
    expect(section.className).toMatch(/font-sans/)
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/lodgely-1')

    // 60% black scrim over the photo (decorative, aria-hidden overlay).
    const scrim = section.querySelector('[aria-hidden="true"]') as HTMLElement
    expect(scrim).not.toBeNull()
    expect(scrim.className).toMatch(/absolute/)
    expect(scrim.className).toMatch(/bg-black\/60/)

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
