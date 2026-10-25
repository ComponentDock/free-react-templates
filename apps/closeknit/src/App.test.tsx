import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { App } from './App'
import { NAV_LINKS } from './content'

afterEach(() => {
  vi.restoreAllMocks()
  document.body.style.overflow = ''
})

describe('App', () => {
  it('provides exactly one banner, main, contentinfo and h1', () => {
    render(<App />)

    expect(screen.getAllByRole('banner')).toHaveLength(1)
    expect(screen.getAllByRole('main')).toHaveLength(1)
    expect(screen.getAllByRole('contentinfo')).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('renders the band headings as h2 in DOM order', () => {
    render(<App />)

    const headings = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent)
    expect(headings).toEqual([
      'Everything, in the order it happened',
      'A circle for each part of your life',
      'Real connections, not a follower count',
      'The settings other networks bury',
      'You are the customer, so there is a price',
      'Smaller turned out to be the feature',
      'The things people check first',
      'Start with one circle',
      'Product',
      'Company',
      'Support',
      'Stay Updated',
    ])
  })

  it('resolves every nav target to a band on the page', () => {
    const { container } = render(<App />)

    for (const link of NAV_LINKS) {
      expect(document.getElementById(link.id)).not.toBeNull()
    }
    const anchors = Array.from(container.querySelectorAll('a[href]'))
    const fragments = anchors
      .map((anchor) => anchor.getAttribute('href') ?? '')
      .filter((href) => href.startsWith('#'))
    expect(fragments.length).toBeGreaterThan(30)
    for (const href of fragments) {
      expect(document.getElementById(href.slice(1))).not.toBeNull()
    }
    expect(container.querySelectorAll('a[href="#"]')).toHaveLength(0)
  })

  it('never names the source design in the rendered page', () => {
    const { container } = render(<App />)
    const html = container.innerHTML.toLowerCase()

    expect(html).not.toContain('colorlib')
    expect(html).not.toContain('circles.social')
    expect(html).toContain('componentdock.com')
  })
})
