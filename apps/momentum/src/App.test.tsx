import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'
import {
  brand,
  footer,
  hero,
  countdown,
  services,
  about,
  pricingPlans,
  moreFeatures,
  teamMembers,
  newsletter,
} from './data'

describe('App', () => {
  it('composes every section of the landing page in order', () => {
    const { container } = render(<App />)

    // Navbar brand + hero headline.
    expect(screen.getByRole('link', { name: brand })).toBeInTheDocument()
    const heroHeading = screen.getByRole('heading', { level: 1 })
    expect(heroHeading.textContent).toMatch(new RegExp(hero.kicker))
    expect(heroHeading.textContent).toMatch(new RegExp(hero.headline))

    // Countdown section.
    expect(screen.getByRole('heading', { name: countdown.title })).toBeInTheDocument()
    for (const label of countdown.labels) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0)
    }

    // Services + about.
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    for (const service of services) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: about.title })).toBeInTheDocument()

    // Pricing.
    for (const plan of pricingPlans) {
      const card = screen.getByRole('heading', { name: plan.name }).closest('div')!
      expect(within(card).getByText(plan.price)).toBeInTheDocument()
    }

    // More features.
    expect(screen.getByRole('heading', { name: moreFeatures.title })).toBeInTheDocument()

    // Testimonials + team.
    expect(screen.getByRole('heading', { name: 'People Says...' })).toBeInTheDocument()
    for (const member of teamMembers) {
      expect(screen.getByRole('heading', { name: member.name })).toBeInTheDocument()
    }

    // Newsletter + footer with the Component Dock link.
    expect(screen.getByRole('heading', { name: newsletter.title })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: footer.componentDockLabel })).toHaveAttribute(
      'href',
      footer.componentDockHref,
    )

    // Section order sanity: countdown before newsletter.
    const headings = Array.from(container.querySelectorAll('h1, h2'))
    const order = headings.map((node) => node.textContent)
    expect(order.indexOf(countdown.title)).toBeGreaterThan(-1)
    expect(order.indexOf(countdown.title)).toBeLessThan(order.indexOf(newsletter.title))
  })
})
