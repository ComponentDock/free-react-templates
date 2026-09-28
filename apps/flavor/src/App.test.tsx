import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { brand, hero, about, specialties, specialties2, testimonials, menuItems } from './data'

describe('App', () => {
  it('renders the header with the brand logo', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: brand.name }).length).toBeGreaterThan(0)
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: hero.heading })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: hero.cta })).toBeInTheDocument()
  })

  it('renders the info bar section', () => {
    render(<App />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Opening Time')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: about.heading })).toBeInTheDocument()
  })

  it('renders the first specialties section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Our Delicious Specialties' }),
    ).toBeInTheDocument()
    for (const dish of specialties) {
      expect(screen.getAllByRole('heading', { name: dish.title }).length).toBeGreaterThan(0)
    }
  })

  it('renders the second specialties section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Flavor Specialties' }),
    ).toBeInTheDocument()
    for (const dish of specialties2) {
      expect(screen.getAllByRole('heading', { name: dish.title }).length).toBeGreaterThan(0)
    }
  })

  it('renders the parallax intro section', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Watch Video/i })).toBeInTheDocument()
  })

  it('renders the testimonials section', () => {
    render(<App />)
    for (const t of testimonials) {
      expect(screen.getByText((content) => content.includes(t.author))).toBeInTheDocument()
    }
  })

  it('renders the menu section with tabbed items', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Flavor Menu' })).toBeInTheDocument()
    const mainItems = menuItems.filter((item) => item.category === 'Main')
    for (const item of mainItems) {
      expect(screen.getAllByRole('heading', { name: item.name }).length).toBeGreaterThan(0)
    }
  })

  it('renders the reservation form', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Make A Reservation' }),
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
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
