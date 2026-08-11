import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the Bookly branding', () => {
    render(<App />)

    expect(document.title).toBe('Bookly — Hotel Reservation Template')
  })

  it('renders a full-viewport section with the full-bleed photo background and white overlay', () => {
    const { container } = render(<App />)

    const section = container.querySelector('section#booking') as HTMLElement
    expect(section).not.toBeNull()
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/bookly-1/1920/1080')
    expect(section.className).toMatch(/min-h-screen/)
    expect(section.className).toMatch(/bg-cover/)
    expect(section.className).toMatch(/bg-center/)
    expect(section.className).toMatch(/items-center/)
    expect(section.className).toMatch(/justify-center/)

    const overlay = section.querySelector('[aria-hidden="true"]') as HTMLElement
    expect(overlay).not.toBeNull()
    expect(overlay.className).toMatch(/bg-white\/80/)
    expect(overlay.className).toMatch(/absolute/)
    expect(overlay.className).toMatch(/inset-0/)
  })

  it('renders the CTA headline and paragraph in the source typography', () => {
    render(<App />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Make your reservation')
    expect(heading.className).toMatch(/text-\[52px\]/)
    expect(heading.className).toMatch(/uppercase/)
    expect(heading.className).toMatch(/font-black/)
    expect(heading.className).toMatch(/text-ink/)

    const paragraph = screen.getByText(/Lorem ipsum dolor sit amet consectetur/)
    expect(paragraph.className).toMatch(/text-\[22px\]/)
    expect(paragraph.className).toMatch(/text-ink/)
  })

  it('centers the white reservation card next to the CTA column', () => {
    const { container } = render(<App />)

    const card = container.querySelector('form')?.parentElement as HTMLElement
    expect(card).not.toBeNull()
    expect(card.className).toMatch(/bg-white/)
    expect(card.className).toMatch(/max-w-\[642px\]/)
    expect(card.className).toMatch(/shadow-\[0_0_10px_-5px/)
  })

  it('renders NO navbar, hero chrome or footer (single-section form demo)', () => {
    const { container } = render(<App />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument()
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelector('main')).not.toBeNull()
  })
})
