import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { brand, hero, about, services, brands, testimonials, cta, footer } from './data'

describe('App', () => {
  it('renders the header with the brand logo and nav', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: new RegExp(brand.name) }).length).toBeGreaterThan(0)
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: hero.heading })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: hero.cta })).toBeInTheDocument()
  })

  it('renders the services section with all four cards', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: services.heading })).toBeInTheDocument()
    const servicesSection = document.querySelector('#services') as HTMLElement
    for (const item of services.items) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
    }
    expect(within(servicesSection).getAllByRole('link', { name: 'Learn More' })).toHaveLength(4)
  })

  it('renders the client logo strip', () => {
    render(<App />)
    for (const name of brands) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders the about section with counters', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: about.heading })).toBeInTheDocument()
    for (const counter of about.counters) {
      expect(screen.getByText(`${counter.value}${counter.suffix}`)).toBeInTheDocument()
    }
  })

  it('renders the testimonial carousel', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: testimonials.heading }),
    ).toBeInTheDocument()
    expect(screen.getByText(`“${testimonials.items[0]!.quote}”`)).toBeInTheDocument()
  })

  it('renders the CTA band', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: cta.heading })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: cta.cta })).toHaveAttribute('href', '#contact')
  })

  it('renders the footer with the Component Dock credit', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByText(footer.blurb)).toBeInTheDocument()
  })
})
