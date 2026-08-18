import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the three link widgets with their items', () => {
    render(<Footer />)

    const home = screen.getByRole('navigation', { name: 'Home' })
    expect(within(home).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(home).getByRole('link', { name: 'About us' })).toBeInTheDocument()
    expect(within(home).getByRole('link', { name: 'Places' })).toBeInTheDocument()
    expect(within(home).getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(within(home).getByRole('link', { name: 'Destination' })).toBeInTheDocument()
    expect(within(home).getByRole('link', { name: 'Terms' })).toBeInTheDocument()
    expect(within(home).getByRole('link', { name: 'Privacy' })).toBeInTheDocument()

    const practice = screen.getByRole('navigation', { name: 'Practice Area' })
    ;['Travel', 'Popular places', 'Destination', 'Tour', 'Family Vacation'].forEach((label) =>
      expect(within(practice).getByRole('link', { name: label })).toBeInTheDocument(),
    )

    const services = screen.getByRole('navigation', { name: 'Services' })
    ;['Tour', 'Swimming', 'Kayak', 'Surfing'].forEach((label) =>
      expect(within(services).getByRole('link', { name: label })).toBeInTheDocument(),
    )
  })

  it('renders the contact details with clickable phone and email links', () => {
    render(<Footer />)
    expect(screen.getByText('18 Palm Harbor Dr, Bayview, Tropical Coast 3910')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+1(123)-456-7890' })).toHaveAttribute(
      'href',
      'tel:+11234567890',
    )
    expect(screen.getByRole('link', { name: '+1(123)-456-7891' })).toHaveAttribute(
      'href',
      'tel:+11234567891',
    )
    expect(screen.getByRole('link', { name: 'stay@concierge.example' })).toHaveAttribute(
      'href',
      'mailto:stay@concierge.example',
    )
  })

  it('renders the Connect socials as teal circle links with brand icons', () => {
    render(<Footer />)
    ;['Facebook', 'X', 'LinkedIn', 'Pinterest', 'Instagram'].forEach((name) => {
      const link = screen.getByRole('link', { name })
      expect(link.className).toContain('bg-brand')
      expect(link.className).toContain('rounded-full')
      expect(link.querySelector('svg')).not.toBeNull()
    })
  })

  it('renders the copyright bar with the current year and the Component Dock link', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`© ${year} Concierge — All rights reserved`)),
    ).toBeInTheDocument()

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
