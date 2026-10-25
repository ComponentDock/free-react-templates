import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from './App'
import { AREAS, FAQ, HERO, NAV_LINKS, SERVICES, TESTIMONIALS } from './content'

beforeEach(() => {
  window.localStorage.clear()
  window.localStorage.setItem('theme', 'light')
  document.documentElement.className = ''
})

describe('App', () => {
  it('lands the landmarks: one h1, one main, one header, one footer', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('main')).toHaveLength(1)
    expect(document.querySelectorAll('header')).toHaveLength(1)
    expect(document.querySelectorAll('footer')).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(8)
  })

  it('runs the bands in the measured order', () => {
    const { container } = render(<App />)
    const ids = Array.from(container.querySelectorAll('main section')).map((band) => band.id)
    expect(ids).toEqual([
      'hero',
      'process',
      'why-us',
      'services',
      'areas',
      'testimonials',
      'faq',
      'contact',
    ])
  })

  it('puts the licence strip above the sticky header', () => {
    const { container } = render(<App />)
    const kids = Array.from(container.firstElementChild?.children ?? [])
    const barIndex = kids.findIndex((node) => node.hasAttribute('data-licence-bar'))
    const headerIndex = kids.findIndex((node) => node.hasAttribute('data-header'))
    expect(barIndex).toBeGreaterThan(-1)
    expect(barIndex).toBeLessThan(headerIndex)
  })

  it('carries the fixed chrome and the skip link first', () => {
    render(<App />)
    expect(document.getElementById('scroll-progress')).not.toBeNull()
    expect(document.getElementById('back-to-top')).not.toBeNull()
    expect(document.querySelector('[data-cookie-consent]')).not.toBeNull()
    expect(document.querySelector('a[href="#main-content"]')).not.toBeNull()
    expect(document.getElementById('main-content')).not.toBeNull()
  })

  it('keeps every nav target on the page', () => {
    const { container } = render(<App />)
    NAV_LINKS.forEach((link) => {
      expect(container.querySelector(link.href)).not.toBeNull()
    })
  })

  it('has no dead anchors and carries the invented brand only', () => {
    const { container } = render(<App />)
    container.querySelectorAll('a').forEach((anchor) => {
      expect(anchor.getAttribute('href')).not.toBe('#')
    })
    expect(container.textContent).toContain('Airshed')
    // Assembled at runtime: this guard must not re-introduce the strings it bans.
    expect(container.textContent?.toLowerCase()).not.toContain(['zep', 'hyr'].join(''))
    expect(container.textContent?.toLowerCase()).not.toContain(['color', 'lib'].join(''))
  })

  it('renders every measured list: five metrics, six prices, twelve towns, three quotes, five questions', () => {
    render(<App />)
    expect(screen.getByText(HERO.headlineAccent)).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(main.querySelectorAll('h3')).toHaveLength(SERVICES.items.length + FAQ.items.length + 5)
    expect(screen.getByText('From $1,150')).toBeInTheDocument()
    expect(screen.getByText(AREAS.towns[11]!)).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS.items[2]!.name)).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /Do I need an air purifier/ })).toHaveLength(1)
  })

  it('links Component Dock from the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
