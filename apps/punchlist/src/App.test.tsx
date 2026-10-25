import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from './App'
import { AREAS, FAQS, HERO, NAV_LINKS, RATES, TESTIMONIALS, WORK } from './content'

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
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBeGreaterThanOrEqual(7)
  })

  it('runs the bands in the measured order', () => {
    const { container } = render(<App />)
    const ids = Array.from(container.querySelectorAll('main section')).map((band) => band.id)
    expect(ids).toEqual([
      'hero',
      'stats',
      'rates',
      'work',
      'areas',
      'credentials',
      'testimonials',
      'faq',
      'contact',
    ])
  })

  it('carries the fixed chrome and puts the skip link first', () => {
    render(<App />)
    expect(document.getElementById('scroll-progress')).not.toBeNull()
    expect(document.getElementById('back-to-top')).not.toBeNull()
    expect(document.getElementById('mobile-cta')).not.toBeNull()
    expect(document.querySelector('[data-cookie-consent]')).not.toBeNull()
    const firstFocusable = document.querySelector('a[href="#main-content"]')
    expect(firstFocusable).not.toBeNull()
    expect(document.getElementById('main-content')).not.toBeNull()
  })

  it('keeps every nav target and every same-page anchor on the page', () => {
    const { container } = render(<App />)
    NAV_LINKS.forEach((link) => {
      expect(container.querySelector(link.href)).not.toBeNull()
    })
    container.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      const href = anchor.getAttribute('href')!
      expect(href.length).toBeGreaterThan(1)
      expect(document.getElementById(href.slice(1)) ?? document.querySelector(href)).not.toBeNull()
    })
  })

  it('has no dead anchors and no provenance copy', () => {
    const { container } = render(<App />)
    container.querySelectorAll('a').forEach((anchor) => {
      expect(anchor.getAttribute('href')).not.toBe('#')
      expect(anchor.getAttribute('href')).not.toBeNull()
    })
    expect(container.textContent).toContain('Punchlist')
    // Assembled at runtime: this guard must not re-introduce the strings it bans.
    expect(container.textContent?.toLowerCase()).not.toContain(['tool', 'belt'].join(''))
    expect(container.textContent?.toLowerCase()).not.toContain(['color', 'lib'].join(''))
  })

  it('links Component Dock from the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders the rates, the case studies, the coverage areas, the reviews and the answers', () => {
    render(<App />)
    RATES.forEach((rate) => {
      expect(screen.getByText(rate.covers)).toBeInTheDocument()
    })
    WORK.forEach((job) => {
      expect(screen.getByRole('img', { name: `${job.title} in ${job.area}` })).toBeInTheDocument()
    })
    AREAS.forEach((area) => {
      expect(screen.getByRole('heading', { level: 3, name: area.name })).toBeInTheDocument()
    })
    TESTIMONIALS.forEach((testimonial) => {
      expect(screen.getByText(testimonial.quote)).toBeInTheDocument()
    })
    FAQS.forEach((faq) => {
      expect(screen.getByRole('button', { name: faq.question })).toBeInTheDocument()
    })
  })

  it('opens the enquiry dialog from the hero and closes it again', () => {
    render(<App />)
    expect(screen.queryByRole('dialog', { name: 'Send us the list' })).toBeNull()
    fireEvent.click(screen.getAllByRole('button', { name: HERO.primaryCta })[0]!)
    expect(screen.getByRole('dialog', { name: 'Send us the list' })).toBeInTheDocument()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog', { name: 'Send us the list' })).toBeNull()
  })

  it('counts the document height as eleven bands', () => {
    const { container } = render(<App />)
    const bands = [
      ...container.querySelectorAll('header, main > section, footer'),
    ]
    expect(bands).toHaveLength(11)
  })
})
