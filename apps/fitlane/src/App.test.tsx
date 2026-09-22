import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Fitlane — Gym & Fitness Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Hero heading
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Never.*Limit.*Yourself/s)

    // Section headings
    expect(screen.getByRole('heading', { name: /about fitlane/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /classes/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /pricing/i })).toBeInTheDocument()
  })
})
