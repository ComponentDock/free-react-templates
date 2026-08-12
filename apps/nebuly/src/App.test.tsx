import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Nebuly — Cloud Services')
  })

  it('renders every section in the source order', () => {
    const { container } = render(<App />)
    const ids = [...container.querySelectorAll('main > [id]')].map((node) => node.id)
    expect(ids).toEqual([
      'home-section',
      'partner-section',
      'domain-section',
      'services-section',
      'features-section',
      'counters-section',
      'cta-section',
      'faq-section',
      'pricing-section',
      'testimonials-section',
      'blog-section',
    ])
    expect(screen.getByRole('heading', { level: 1, name: 'Cloud, Management, Template' }))
    expect(screen.getByRole('heading', { name: 'Our Best Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent Blog' })).toBeInTheDocument()
  })

  it('exposes the header, main landmark, and footer', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
