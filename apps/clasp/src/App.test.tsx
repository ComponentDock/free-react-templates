import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the band heading', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Bootstrap Accordion #9')
  })

  it('renders all five accordion questions', () => {
    render(<App />)
    expect(screen.getByText('How to download and register?')).toBeInTheDocument()
    expect(screen.getByText('How to create your paypal account?')).toBeInTheDocument()
    expect(screen.getByText('How to link your paypal and bank account?')).toBeInTheDocument()
    expect(screen.getByText('How to update your billing information?')).toBeInTheDocument()
    expect(screen.getByText('How to contact customer support?')).toBeInTheDocument()
  })

  it('renders the footer with the Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /more templates at component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Clasp — Accordion List Template')
  })

  it('opens the first row on load', () => {
    render(<App />)
    const firstButton = screen.getByRole('button', { name: 'How to download and register?' })
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('region', { name: 'How to download and register?' }),
    ).toBeInTheDocument()
  })

  it('renders exactly one band: no navigation, hero or newsletter', () => {
    const { container } = render(<App />)
    expect(container.querySelector('nav')).toBeNull()
    expect(container.querySelector('header')).toBeNull()
    expect(container.querySelector('form')).toBeNull()
    expect(container.querySelectorAll('h1')).toHaveLength(1)
  })

  it('keeps the list inside a 1140px column', () => {
    const { container } = render(<App />)
    const column = container.querySelector('[class*="max-w-[1140px]"]')
    expect(column).not.toBeNull()
  })
})
