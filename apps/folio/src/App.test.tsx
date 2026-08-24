import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('Folio app', () => {
  it('renders all sections', () => {
    render(<App />)

    // Navbar — "Folio" appears in navbar and footer
    expect(screen.getAllByText('Folio').length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByText('Read This If You Want To Take Great Photographs.')).toBeInTheDocument()

    // Intro quote
    expect(screen.getByText(/I'm a Writer Based in England/)).toBeInTheDocument()

    // About
    expect(screen.getByText(/A Writer & Author of the Book/)).toBeInTheDocument()

    // Books
    expect(screen.getByText('Our Books')).toBeInTheDocument()

    // Stats
    expect(screen.getByText('Technical Statistics')).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Folio — Author Portfolio Template')
  })
})
