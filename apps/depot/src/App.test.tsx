import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes the navbar and hero in the banner landmark', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: 'Depot' })).toBeInTheDocument()
    expect(
      within(banner).getByRole('heading', { level: 1, name: 'Buy & Sell Property Here' }),
    ).toBeInTheDocument()
  })

  it('renders all main sections in order inside the main landmark', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const sections = within(main).getAllByRole('region')
    expect(sections.map((section) => section.getAttribute('aria-label'))).toEqual([
      'Properties',
      'Real Estate Agents',
      'How It Works',
      'About',
      'Services',
      'Testimonials',
      'News and Events',
      'Contact Us',
    ])
  })

  it('renders the footer as the contentinfo landmark', () => {
    render(<App />)
    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByText('© 2026 Depot. All rights reserved.')).toBeInTheDocument()
    expect(within(contentinfo).getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
