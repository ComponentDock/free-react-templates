import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the Innly branding', () => {
    render(<App />)

    expect(document.title).toBe('Innly — Resort Reservation Form Template')
  })

  it('renders a full-viewport section with the seeded resort photo and a light 20% scrim', () => {
    const { container } = render(<App />)

    const section = container.querySelector('section#booking') as HTMLElement
    expect(section).not.toBeNull()
    expect(section.className).toMatch(/min-h-screen/)
    expect(section.className).toMatch(/bg-cover/)
    expect(section.className).toMatch(/bg-center/)
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/innly-10/1600/900')

    const scrim = container.querySelector('section#booking > div') as HTMLElement
    expect(scrim).not.toBeNull()
    expect(scrim.className).toMatch(/bg-black\/20/)
    expect(scrim.className).toMatch(/absolute/)
  })

  it('centers the white booking card over the photograph', () => {
    const { container } = render(<App />)

    const card = container.querySelector('form') as HTMLElement
    expect(card).not.toBeNull()
    expect(card.className).toMatch(/bg-white/)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Make your reservation')
  })

  it('renders no navbar or hero copy, one section, and the Component Dock footer', () => {
    const { container } = render(<App />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    // Only the single booking section exists.
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelector('main')).not.toBeNull()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
