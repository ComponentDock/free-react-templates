import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from './App'
import { NAV_LINKS, SECTORS } from './content'

beforeEach(() => {
  window.localStorage.clear()
})

describe('App', () => {
  it('lands the landmarks: one h1, one main, one header, one footer', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('main')).toHaveLength(1)
    expect(document.querySelectorAll('header')).toHaveLength(1)
    expect(document.querySelectorAll('footer')).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(5)
  })

  it('runs the bands in the measured order', () => {
    const { container } = render(<App />)
    const ids = Array.from(container.querySelectorAll('main section')).map(
      (band) => band.id || 'hero',
    )
    expect(ids).toEqual([
      'hero',
      'capabilities',
      'projects',
      'certifications',
      'process',
      'contact',
    ])
  })

  it('puts the licence bar above the sticky header', () => {
    const { container } = render(<App />)
    const kids = Array.from(container.firstElementChild?.children ?? [])
    const barIndex = kids.findIndex((node) => node.hasAttribute('data-licence-bar'))
    const headerIndex = kids.findIndex((node) => node.hasAttribute('data-header'))
    expect(barIndex).toBeGreaterThan(-1)
    expect(barIndex).toBeLessThan(headerIndex)
  })

  it('carries the fixed chrome', () => {
    render(<App />)
    expect(document.getElementById('scroll-progress')).not.toBeNull()
    expect(document.getElementById('back-to-top')).not.toBeNull()
    expect(document.querySelector('[data-cookie-consent]')).not.toBeNull()
  })

  it('has no form and no input anywhere — the quote is a CTA', () => {
    const { container } = render(<App />)
    expect(container.querySelector('form')).toBeNull()
    expect(container.querySelector('input')).toBeNull()
    expect(container.querySelector('textarea')).toBeNull()
    expect(container.querySelector('select')).toBeNull()
  })

  it('has no dead anchors and no provenance copy in the rendered page', () => {
    const { container } = render(<App />)
    container.querySelectorAll('a').forEach((anchor) => {
      expect(anchor.getAttribute('href')).not.toBe('#')
    })
    expect(container.textContent).toContain('Mandrel')
    expect(container.textContent?.toLowerCase()).not.toContain('template by')
  })

  it('keeps every nav target on the page', () => {
    const { container } = render(<App />)
    NAV_LINKS.forEach((link) => {
      const target = link.href.replace('#', '')
      expect(container.querySelector(`#${target}`)).not.toBeNull()
    })
  })

  it('renders the 35-cell matrix inside the full page', () => {
    render(<App />)
    expect(document.querySelectorAll('td[data-cell]')).toHaveLength(35)
    SECTORS.forEach((sector) => {
      expect(screen.getAllByRole('columnheader', { name: sector })).toHaveLength(1)
    })
  })

  it('links Component Dock from the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
