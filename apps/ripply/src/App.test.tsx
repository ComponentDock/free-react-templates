import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Ripply — App Landing Page Template')
  })

  it('composes the navbar banner, all sections in main, and the footer contentinfo', () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: 'Ripply' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    // Every section heading appears in order-sensitive main landmark.
    expect(within(main).getByRole('heading', { level: 1, name: 'OnTouch' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: /Powerful Apps Features/i }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Why Choose Us ?' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Aim Client Satisfaction' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'See Ripply in action' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Now Install Available On' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'App Screenshots' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Pricing Table' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { level: 2, name: 'Team Member' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Frequently Asked Question' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Latest News From Blog' }),
    ).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(
      within(contentinfo).getByRole('heading', { level: 2, name: 'Subscription Now' }),
    ).toBeInTheDocument()
    expect(within(contentinfo).getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
