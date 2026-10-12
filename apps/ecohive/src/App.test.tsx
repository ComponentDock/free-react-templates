import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the sections in the reference order', () => {
    const { container } = render(<App />)
    const ids = Array.from(container.querySelectorAll('section, footer, header')).map(
      (node) => node.id,
    )
    expect(ids).toEqual([
      '',
      'home',
      'domains',
      'features',
      'pricing',
      'about',
      'support',
      'faq',
      'testimonials',
      'contact',
    ])
  })

  it('renders the header, every section heading and the footer', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Powerful web hosting')
    for (const heading of [
      'Search new domain',
      'Most amazing features',
      'Choose plan which fit for you',
      'Global server location',
      'Dedicated support',
      'Frequently ask questions',
      'Join the Ecohive newsletter',
    ]) {
      expect(screen.getByRole('heading', { level: 2, name: heading })).toBeInTheDocument()
    }
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Ecohive — Web Hosting Template')
  })
})
