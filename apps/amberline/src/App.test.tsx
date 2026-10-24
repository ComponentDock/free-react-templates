import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes the fourteen bands in reference order', () => {
    const { container } = render(<App />)
    const headings = screen.getAllByRole('heading', { level: 2 }).map((node) => node.textContent)
    expect(headings).toEqual([
      'Quality and Affordable Constructor',
      "Companies We've Worked With",
      'We Build Great Structures',
      'Services',
      'Building Dreams Into Reality Since 1982',
      'Qualified Engineers',
      'Projects',
      'Pricing & Packages',
      'Happy Clients',
      'Recent Blog',
      'Request a quote',
      'You Want To Ask Something From Us?',
      'Subscribe to Our Newsletter',
      'Recent posts',
      'Quick links',
      'Have a question?',
    ])
    expect(container.querySelector('#main-content')).not.toBeNull()
  })

  it('offers a skip link that targets the main landmark', () => {
    render(<App />)
    const skip = screen.getByRole('link', { name: 'Skip to main content' })
    expect(skip).toHaveAttribute('href', '#main-content')
  })

  it('only pulls imagery from the placeholder host and credits Component Dock', () => {
    const { container } = render(<App />)
    const sources = Array.from(container.querySelectorAll('img')).map((img) => img.getAttribute('src') ?? '')
    expect(sources.length).toBeGreaterThan(0)
    expect(sources.every((src) => src.startsWith('https://picsum.photos/seed/amberline-'))).toBe(true)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })
})
