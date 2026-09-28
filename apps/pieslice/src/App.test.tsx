import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Pieslice — Pizza Restaurant Template')

    // Navbar
    expect(screen.getByRole('banner')).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Pizza & Pasta')

    // Our Story
    expect(screen.getByRole('heading', { name: 'Our Story' })).toBeInTheDocument()

    // Best Sellers
    expect(screen.getByRole('heading', { name: 'Best Sellers' })).toBeInTheDocument()

    // Our Menu
    expect(screen.getByRole('heading', { name: 'Our Menu' })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
