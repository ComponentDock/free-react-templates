import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Creed — Church Website Template')

    // Navbar
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/let god guide your path/i)

    // CTA
    expect(screen.getByRole('link', { name: /visitors info/i })).toBeInTheDocument()

    // About
    expect(screen.getByText(/blessed is the one/i)).toBeInTheDocument()

    // Activities
    expect(screen.getByText('Church Activities')).toBeInTheDocument()

    // Donate
    expect(screen.getByText('Donate to our Charities')).toBeInTheDocument()

    // Blog
    expect(screen.getByText('Latest News')).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
