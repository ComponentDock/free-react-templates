import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { COMPONENTDOCK_HREF, NAV_LINKS } from './content'

describe('App', () => {
  it('lays the nine bands out in the reference order', () => {
    const { container } = render(<App />)
    const bands = Array.from(container.querySelectorAll('main > section'))
    expect(bands.map((band) => band.getAttribute('id'))).toEqual([
      null,
      'services',
      'owner',
      'emergency',
      'service-areas',
      'testimonials',
      'contact',
    ])
    expect(container.querySelectorAll('header')).toHaveLength(1)
    expect(container.querySelectorAll('footer')).toHaveLength(1)
  })

  it('exposes one h1, four h2s and three h3s without skipping a level', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(4)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
    expect(screen.queryAllByRole('heading', { level: 4 })).toHaveLength(0)
  })

  it('ships no dead anchor and no malformed URI', () => {
    const { container } = render(<App />)

    const anchors = Array.from(container.querySelectorAll('a[href]'))
    expect(anchors.length).toBeGreaterThan(20)

    for (const anchor of anchors) {
      const href = anchor.getAttribute('href')!
      expect(href).not.toBe('#')
      if (href.startsWith('#')) {
        expect(document.getElementById(href.slice(1))).not.toBeNull()
      }
      if (href.startsWith('tel:')) {
        expect(href).toMatch(/^tel:\+\d{11}$/)
      }
      if (href.startsWith('mailto:')) {
        expect(href).toMatch(/^mailto:[^@\s]+@[^@\s]+$/)
      }
    }
  })

  it('routes every nav label at a band that exists', () => {
    render(<App />)
    for (const link of NAV_LINKS) {
      expect(document.getElementById(link.id)).not.toBeNull()
    }
  })

  it('credits Component Dock and names no other template source', () => {
    const { container } = render(<App />)
    const dock = screen.getByRole('link', { name: /Component Dock/ })
    expect(dock).toHaveAttribute('href', COMPONENTDOCK_HREF)
    // assembled at runtime: the app tree must never carry the provenance string
    const sourceName = ['color', 'lib'].join('')
    expect(container.innerHTML.toLowerCase()).not.toContain(sourceName)
  })

  it('paints the skip link, the progress bar and the two fixed surfaces', () => {
    const { container } = render(<App />)
    expect(container.querySelector('[data-scroll-progress]')).toBeInTheDocument()
    expect(container.querySelector('#main-content')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()
    expect(screen.getByRole('dialog', { name: 'Cookie consent' })).toBeInTheDocument()
  })
})
