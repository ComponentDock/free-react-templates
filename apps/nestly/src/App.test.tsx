import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the Nestly branding', () => {
    render(<App />)

    expect(document.title).toBe('Nestly — Hotel Reservation Template')
  })

  it('renders a full-viewport section with the seeded beach photo background and NO overlay', () => {
    const { container } = render(<App />)

    const section = container.querySelector('section#booking') as HTMLElement
    expect(section).not.toBeNull()
    expect(section.className).toMatch(/min-h-screen/)
    expect(section.className).toMatch(/bg-cover/)
    expect(section.className).toMatch(/bg-center/)
    expect(section.className).toMatch(/items-center/)
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/nestly-1/1920/1080')

    // The source photo shows at FULL saturation — no scrim/wash overlay.
    expect(container.querySelector('.bg-wash')).toBeNull()
  })

  it('renders the white horizontal booking bar vertically centered in the viewport', () => {
    render(<App />)

    const form = screen.getByRole('button', { name: 'Check availability' }).closest('form')
    expect(form).not.toBeNull()
    expect(form!.className).toMatch(/bg-white/)
  })

  it('renders NO navbar, hero chrome or footer (single-section form demo)', () => {
    const { container } = render(<App />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument()
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelector('main')).not.toBeNull()
  })
})
