import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from './App'
import { CHART, FAQS, INCENTIVES, NAV_LINKS, SERVICES, TOWNS } from './content'

beforeEach(() => {
  window.localStorage.clear()
  window.localStorage.setItem('theme', 'light')
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
    const ids = Array.from(container.querySelectorAll('main section')).map(
      (band) => band.id || 'hero',
    )
    expect(ids).toEqual([
      'hero',
      'incentives',
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
    const firstFocusable = document.querySelector('a[href="#main-content"]')
    expect(firstFocusable).not.toBeNull()
    expect(document.getElementById('main-content')).not.toBeNull()
  })

  it('keeps every nav target on the page', () => {
    const { container } = render(<App />)
    NAV_LINKS.forEach((link) => {
      expect(container.querySelector(link.href)).not.toBeNull()
    })
  })

  it('has no dead anchors and no external attribution copy', () => {
    const { container } = render(<App />)
    container.querySelectorAll('a').forEach((anchor) => {
      const href = anchor.getAttribute('href')
      expect(href).not.toBe('#')
      expect(href).not.toBeNull()
    })
    expect(container.textContent).toContain('Balancepoint')
    expect(container.textContent?.toLowerCase()).not.toContain('switchover')
    expect(container.textContent?.toLowerCase()).not.toContain('colorlib')
  })

  it('renders the ledger, the chart, the grid, the towns and the FAQ answers', () => {
    render(<App />)
    expect(screen.getAllByRole('checkbox')).toHaveLength(INCENTIVES.length)
    expect(screen.getByRole('img', { name: CHART.alt })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(
      SERVICES.length + FAQS.length + 4,
    )
    expect(screen.getByText(TOWNS[0]!)).toBeInTheDocument()
    expect(screen.getByText(FAQS[0]!.answer)).toBeInTheDocument()
    expect(screen.getAllByRole('button').length).toBeGreaterThanOrEqual(5)
  })

  it('animates exactly the fourteen reviews and FAQ targets', () => {
    render(<App />)
    expect(document.querySelectorAll('[data-reveal]')).toHaveLength(14)
    const reviews = document.getElementById('testimonials') as HTMLElement
    const faq = document.getElementById('faq') as HTMLElement
    expect(reviews.querySelectorAll('[data-reveal]')).toHaveLength(6)
    expect(faq.querySelectorAll('[data-reveal]')).toHaveLength(8)
  })

  it('links Component Dock from the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
