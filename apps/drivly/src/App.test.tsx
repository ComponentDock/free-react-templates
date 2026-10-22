import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the Drivly branding', () => {
    render(<App />)

    expect(document.title).toBe('Drivly — Car Booking Template')
  })

  it('renders a full-viewport section with the full-bleed photo background and dark overlay', () => {
    const { container } = render(<App />)

    const section = container.querySelector('section#booking') as HTMLElement
    expect(section).not.toBeNull()
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/drivly-city/1920/1080')
    expect(section.className).toMatch(/min-h-screen/)
    expect(section.className).toMatch(/bg-cover/)
    expect(section.className).toMatch(/bg-center/)
    expect(section.className).toMatch(/items-center/)
    expect(section.className).toMatch(/justify-center/)

    const overlay = section.querySelector('[aria-hidden="true"]') as HTMLElement
    expect(overlay).not.toBeNull()
    expect(overlay.className).toMatch(/bg-black\/60/)
    expect(overlay.className).toMatch(/absolute/)
    expect(overlay.className).toMatch(/inset-0/)
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders NO navbar or hero chrome (single-section form demo)', () => {
    const { container } = render(<App />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelector('main')).not.toBeNull()
  })
})
