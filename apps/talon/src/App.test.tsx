import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Talon — Modern Business Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Do you need/)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'What People Say' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Latest Blog' })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
