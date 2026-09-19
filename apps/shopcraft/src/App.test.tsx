import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Shopcraft — Ecommerce Store Template')

    // TopBar
    expect(screen.getByText('+12312-3-1209')).toBeInTheDocument()

    // Navbar
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('craft')).toBeInTheDocument()

    // Main content
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    // Hero
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/It's Happening.*this Season!/s)

    // Categories
    expect(screen.getByText('Shop for Different Categories')).toBeInTheDocument()

    // Men Products
    expect(screen.getByText('New realeased Products for Men')).toBeInTheDocument()

    // Women Products
    expect(screen.getByText('New realeased Products for Women')).toBeInTheDocument()

    // Countdown
    expect(screen.getByText('Exclusive Hot Deal Ends in:')).toBeInTheDocument()

    // Related Products
    expect(screen.getByText('Related Searched Products')).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
