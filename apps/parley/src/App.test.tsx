import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('Parley landing page', () => {
  it('renders all sections in reference order with banner and contentinfo', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'We Are The Best Consulting Agency' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Free Consulting' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'The Smartest Thing To Do With Your Consulting Business',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Case Studies' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us?' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Clients Says' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 2, name: 'Recent Blog' })).toHaveLength(2)
  })

  it('renders the intro band twice', () => {
    render(<App />)
    expect(
      screen.getAllByRole('heading', { name: 'You Always Get the Best Guidance' }),
    ).toHaveLength(2)
  })

  it('renders the navbar, quote form, case studies and footer CTA', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: 'Our Services' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Request A Quote' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Request Quote' })).toHaveLength(6)
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
