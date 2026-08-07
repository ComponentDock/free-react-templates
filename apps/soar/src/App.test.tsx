import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Soar — Domain & Hosting Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Design\.\s+Development\.\s+Hosting\./)

    expect(
      screen.getByRole('heading', { level: 2, name: /Get A Domain Name/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Why choose us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Our Best Pricing/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Some fun facts/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /satisfied customer says/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /How it works/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Subscribe to our Newsletter/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Recent Blog/i })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
