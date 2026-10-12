import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the sections in the reference order', () => {
    const { container } = render(<App />)
    const ids = Array.from(container.querySelectorAll('section, footer')).map((node) => node.id)
    expect(ids).toEqual([
      'home',
      'pricing',
      'features',
      'support',
      'map',
      'testimonials',
      'brands',
      'faq',
      'security',
      'help',
      'contact',
    ])
  })

  it('renders the header, every section heading and the footer', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(
      'Fast, secure hosting for every site',
    )
    for (const heading of [
      'Cloud load balancing',
      'Around-the-clock expert support',
      'Stories from our customers',
      'Questions we hear most',
      'Commitment to security',
      'Need a hand getting started?',
    ]) {
      expect(screen.getAllByRole('heading', { level: 2, name: heading }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()
  })

  it('repeats the features title on the map band', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 2, name: 'Cloud load balancing' })).toHaveLength(
      2,
    )
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Presto — Web Hosting Template')
  })
})
