import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Vocare — Job Board')
  })

  it('composes all sections in the original order', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading').map((heading) => heading.textContent)
    const order = [
      'The Easiest Way to Get Your New Job',
      'Top Categories',
      'Featured Jobs Posts For This Week',
      'Happy Clients',
      'Latest Candidates',
      'Recent Blog',
      'Subscribe to our Newsletter',
    ]
    const positions = order.map((heading) => headings.indexOf(heading))
    expect(positions).not.toContain(-1)
    expect([...positions].sort((a, b) => a - b)).toEqual(positions)
  })

  it('renders the footer with the Component Dock credit', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
