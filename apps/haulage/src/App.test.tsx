import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

const isBefore = (a: Element, b: Element) =>
  (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0

describe('App', () => {
  it('composes all sections in the original order with the right landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Haulage — Logistics & Cargo')

    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Choose Your Quality Delivery of Your Cargo',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'What We Offer' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Staff' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Pricing' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Ask Questions' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Why Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Happy Clients' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Articles' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Section order matches the original 1:1 (top bar -> navbar -> hero ->
    // service cards -> offers -> about -> staff -> pricing -> faq -> why us
    // -> testimonials -> blog -> contact -> footer).
    const sections = [
      'home',
      'services',
      'offers',
      'about',
      'staff',
      'pricing',
      'faq',
      'why-us',
      'testimonials',
      'blog',
      'contact',
    ].map((id) => document.getElementById(id))
    expect(sections.every((section) => section !== null)).toBe(true)
    for (let i = 0; i < sections.length - 1; i++) {
      expect(isBefore(sections[i]!, sections[i + 1]!)).toBe(true)
    }
  })
})
