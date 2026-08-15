import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Vintner — Wine Shop Template')
  })

  it('composes all template sections in order', () => {
    const { container } = render(<App />)
    const headings = container.querySelectorAll('h1, h2, h3')
    const order = Array.from(headings).map((h) => h.textContent)
    expect(order[0]).toBe('Grape Wine')
    expect(order).toContain('Our Products')
    expect(order).toContain('Wines For Everyone')
    expect(order).toContain("Wine's Blog")
  })

  it('renders the nav, hero controls, product actions, and footer link', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(nav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: 'Add to Cart' })).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Next quote' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
