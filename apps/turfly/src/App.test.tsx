import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct landmarks', () => {
    render(<App />)

    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Lawn care for everyone/)

    expect(screen.getByRole('heading', { name: 'Lawn Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Welcome to Turfly' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Seasonal Lawn Care Tips' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Happy Clients' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent Blog' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe to our Newsletter' })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
