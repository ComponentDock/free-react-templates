import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Haven — Luxury Hotel Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Haven A Luxury Hotel')

    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings.some((h2) => /Intercontinental/.test(h2.textContent ?? ''))).toBe(true)
    expect(headings.some((h2) => /Discover Our Services/.test(h2.textContent ?? ''))).toBe(true)
    expect(headings.some((h2) => /What Customers Say/.test(h2.textContent ?? ''))).toBe(true)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
