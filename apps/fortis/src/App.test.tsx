import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes every section in the reference order', () => {
    render(<App />)

    // Hero headline is the single h1.
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Fortis Web Design Agency')

    const headings = screen.getAllByRole('heading', { level: 2 }).map((node) => node.textContent)
    const mainOrder = [
      'About Us',
      'Our expertise and skills',
      'Our Services',
      'Our Works',
      'See Our Studio',
      'Testimonials',
      'Blog',
      'About Me',
      'Quick Links',
      'Connect',
      'Newsletter',
    ]
    // The main content headings appear in order (footer widgets follow).
    const mainHeadings = headings.filter((text) => mainOrder.includes(text!))
    expect(mainHeadings).toEqual(mainOrder)
  })

  it('provides the hamburger-only navigation and a Component Dock footer link', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Toggle menu' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
