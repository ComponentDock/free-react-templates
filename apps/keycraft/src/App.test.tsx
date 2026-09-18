import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Keycraft — Locksmith Services Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/We Provide Best Locksmith Services/)

    expect(screen.getByRole('heading', { level: 2, name: /Services We Offer/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Why choose us/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Locksmith Store/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Tips & tricks/ })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
