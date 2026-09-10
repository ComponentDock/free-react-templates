import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

vi.mock('./components/Counter', () => ({
  Counter: () => <div data-testid="counter">Counter Mock</div>,
}))

describe('App', () => {
  it('renders header, main, and footer', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    // The Testimonials component uses <footer> for author attribution,
    // and the Footer component uses <footer> — use getAllByRole
    const footers = screen.getAllByRole('contentinfo')
    expect(footers.length).toBeGreaterThanOrEqual(1)
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Proton — Business & Agency Template')
  })

  it('renders the Proton logo', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Proton' })).toBeInTheDocument()
  })

  it('renders the hero headline', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the footer Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
