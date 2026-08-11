import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the Coastly branding', () => {
    render(<App />)

    expect(document.title).toBe('Coastly — Hotel Booking Form Template')
  })

  it('renders a full-viewport section with the seeded photo background and white overlay', () => {
    const { container } = render(<App />)

    const section = container.querySelector('section#booking') as HTMLElement
    expect(section).not.toBeNull()
    expect(section.className).toMatch(/min-h-screen/)
    expect(section.className).toMatch(/bg-cover/)
    expect(section.className).toMatch(/bg-center/)
    expect(section.className).toMatch(/items-center/)
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/coastly-1/1920/1080')

    const overlay = section.querySelector('[aria-hidden="true"]') as HTMLElement
    expect(overlay).not.toBeNull()
    expect(overlay.className).toMatch(/bg-wash/)
    expect(overlay.className).toMatch(/absolute/)
    expect(overlay.className).toMatch(/inset-0/)
  })

  it('renders the "Book Now!" CTA headline and paragraph in the dark charcoal-navy', () => {
    render(<App />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Book Now!')
    expect(heading.className).toMatch(/text-\[58px\]/)
    expect(heading.className).toMatch(/uppercase/)
    expect(heading.className).toMatch(/text-ink/)

    const paragraph = screen.getByText(/Lorem ipsum dolor sit amet consectetur/)
    expect(paragraph.className).toMatch(/text-\[16px\]/)
    expect(paragraph.className).toMatch(/text-ink/)
  })

  it('renders the CTA column on the right and the dark form block on the left at desktop widths', () => {
    const { container } = render(<App />)

    const cta = container.querySelector('section h1')?.parentElement as HTMLElement
    expect(cta.className).toMatch(/lg:col-span-7/)
    expect(cta.className).toMatch(/lg:col-start-6/)

    const form = container.querySelector('form')?.parentElement as HTMLElement
    expect(form.className).toMatch(/lg:col-span-4/)
    expect(form.className).toMatch(/lg:col-start-1/)
  })

  it('renders NO navbar, hero chrome or footer (single-section form demo)', () => {
    const { container } = render(<App />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument()
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelector('main')).not.toBeNull()
  })
})
