import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Stylely — Barber Shop Template')
  })

  it('composes the navbar, all sections, and the footer in landmarks', () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /Stylely/ })).toHaveAttribute('href', '#home')

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', { level: 1, name: 'Good Look Guaranteed' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'Connect with your dream style' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Service Expectation' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'What We Offer' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Pricing Plan' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'What Clients Say' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Meet Our Artist' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Make an Appointment' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Latest Style News' })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(within(contentinfo).getByRole('heading', { name: 'Contact us' })).toBeInTheDocument()
  })
})
