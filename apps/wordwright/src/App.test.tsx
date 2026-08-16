import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import {
  footer,
  hero,
  quoteBand,
  services,
  servicesTitle,
  stories,
  testimonialsTitle,
} from './data'

describe('App', () => {
  it('composes every section of the copywriter page in order', () => {
    const { container } = render(<App />)

    // Header wordmark + hero headline.
    expect(screen.getByRole('link', { name: 'Wordwright' })).toBeInTheDocument()
    const heroHeading = screen.getByRole('heading', { level: 1 })
    expect(heroHeading.textContent).toMatch(new RegExp(hero.headline))

    // Services.
    expect(screen.getByRole('heading', { name: servicesTitle })).toBeInTheDocument()
    for (const service of services) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
    }

    // Quote band, testimonials, stories.
    expect(screen.getByRole('heading', { name: new RegExp(quoteBand.quote) })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: testimonialsTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: stories.title })).toBeInTheDocument()

    // Footer headline + the mandatory Component Dock link.
    expect(screen.getByRole('heading', { name: footer.headline })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: footer.componentDockLabel })).toHaveAttribute(
      'href',
      footer.componentDockHref,
    )

    // Section order sanity: hero before services before footer.
    const headings = Array.from(container.querySelectorAll('h1, h2'))
    const order = headings.map((node) => node.textContent)
    expect(order.indexOf(hero.headline)).toBeGreaterThan(-1)
    expect(order.indexOf(hero.headline)).toBeLessThan(order.indexOf(servicesTitle))
    expect(order.indexOf(servicesTitle)).toBeLessThan(order.indexOf(footer.headline))
  })
})
