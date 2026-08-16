import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { footer } from './data'

describe('App', () => {
  it('renders every section in the reference order inside a main landmark', () => {
    render(<App />)

    expect(screen.getByRole('main')).toBeInTheDocument()

    const headings = screen.getAllByRole('heading').map((heading) => heading.textContent ?? '')
    const order = [
      'Best Selling Books Ever',
      'Featured This Week',
      'Latest Published items',
      'Join Newsletter',
    ].map((label) => headings.findIndex((text) => text.includes(label)))
    for (const index of order) {
      expect(index).toBeGreaterThanOrEqual(0)
    }
    expect(order[0]).toBeLessThan(order[1]!)
    expect(order[1]!).toBeLessThan(order[2]!)
    expect(order[2]!).toBeLessThan(order[3]!)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Join Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Book Category' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Site Map' })).toBeInTheDocument()
  })

  it('links the footer to Component Dock and never references the source', () => {
    render(<App />)

    const dock = screen.getByRole('link', { name: footer.componentDockLabel })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')

    expect(document.body.innerHTML.toLowerCase()).not.toContain('colorlib')
  })
})
