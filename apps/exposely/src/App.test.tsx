import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, hero, gallery, CTA, and footer', () => {
    render(<App />)

    expect(document.title).toBe('Exposely — Photography Portfolio Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /hero/i })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the gallery section', () => {
    render(<App />)
    expect(screen.getByRole('list', { name: /portfolio/i })).toBeInTheDocument()
  })

  it('renders the CTA section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: /experienced photographer/i }),
    ).toBeInTheDocument()
  })
})
