import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Stratus — Hosting & Cloud Services')
  })

  it('renders every section in the source order', () => {
    const { container } = render(<App />)
    const ids = [...container.querySelectorAll('main > [id]')].map((node) => node.id)
    expect(ids).toEqual([
      'home-section',
      'features-section',
      'services-section',
      'about-section',
      'milestones-section',
      'cta-section',
    ])
    expect(screen.getByRole('heading', { level: 2, name: 'The Best Hosting' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Best Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'We Generate Trust' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'We are here to help you get started' }),
    ).toBeInTheDocument()
  })

  it('exposes the header, main landmark, and footer', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
