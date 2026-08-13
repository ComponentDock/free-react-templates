import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { hero, services, about, portfolio, testimonials, clients, contact, brand } from './data'

describe('App', () => {
  it('renders the header with the brand logo', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: `${brand.name}.` })).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: hero.heading })).toBeInTheDocument()
    const heroSection = document.querySelector('[data-testid="hero"]') as HTMLElement
    expect(within(heroSection).getByRole('link', { name: hero.cta })).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: services.heading })).toBeInTheDocument()
    for (const item of services.items) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
    }
  })

  it('renders the about section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: about.heading })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: about.cta })).toBeInTheDocument()
  })

  it('renders the portfolio grid', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: portfolio.heading })).toBeInTheDocument()
    expect(screen.getAllByTestId(/^portfolio-/)).toHaveLength(9)
  })

  it('renders the dark testimonials band', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: testimonials.heading }),
    ).toBeInTheDocument()
    expect(screen.getByText(`“${testimonials.items[0]!.quote}”`)).toBeInTheDocument()
  })

  it('renders the clients row', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: clients.heading })).toBeInTheDocument()
    for (const logo of clients.logos) {
      expect(screen.getByRole('img', { name: logo.name })).toBeInTheDocument()
    }
  })

  it('renders the contact form', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: contact.heading })).toBeInTheDocument()
    expect(screen.getByLabelText(contact.email)).toBeInTheDocument()
  })

  it('renders the footer with the Component Dock credit', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
