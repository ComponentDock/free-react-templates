import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Veloce — Automotive Service Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Welcome To.*Veloce Garage/)

    expect(screen.getByRole('heading', { level: 2, name: 'What We Do?' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /We Have 20 Years/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Products' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'About Our Statistics' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
