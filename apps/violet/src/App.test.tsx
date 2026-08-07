import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Violet — Startup Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Choose a powerful design for your Start-up/i)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Discover the features' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'They are the best' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'We build a strong team of great people',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Get in touch, send us an e-mail or call us',
      }),
    ).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
