import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in order', () => {
    const { container } = render(<App />)
    const h2s = Array.from(container.querySelectorAll('h2')).map((h) =>
      (h.textContent ?? '').trim().toLowerCase(),
    )
    expect(h2s).toEqual([
      'about us',
      'our services',
      'choose your car',
      'only quality for clients',
      'testimonials',
      'save 30% with the app',
      'tips and articles',
    ])
  })

  it('renders the header, hero headline, and footer with the Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /book a car today/i })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
