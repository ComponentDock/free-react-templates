import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the Restly branding', () => {
    render(<App />)

    expect(document.title).toBe('Restly — Hotel Booking Template')
  })

  it('renders a full-viewport section with the full-bleed night-cityscape photo background', () => {
    const { container } = render(<App />)

    const section = container.querySelector('section#booking') as HTMLElement
    expect(section).not.toBeNull()
    expect(section.style.backgroundImage).toContain(
      'picsum.photos/seed/restly-metropolis/1920/1080',
    )
    expect(section.className).toMatch(/min-h-screen/)
    expect(section.className).toMatch(/bg-cover/)
    expect(section.className).toMatch(/bg-center/)
    expect(section.className).toMatch(/items-center/)
    expect(section.className).toMatch(/justify-center/)
  })

  it('renders the centered white serif headline above the form', () => {
    render(<App />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Make Your Reservation')
    expect(heading.className).toMatch(/text-center/)
    expect(heading.className).toMatch(/font-serif/)
    expect(heading.className).toMatch(/text-\[52px\]/)
    expect(heading.className).toMatch(/font-bold/)
    expect(heading.className).toMatch(/text-white/)
    expect(heading.className).toMatch(/mb-\[30px\]/)
  })

  it('renders NO navbar or footer (single-section form demo)', () => {
    const { container } = render(<App />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument()
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelector('main')).not.toBeNull()
  })
})
