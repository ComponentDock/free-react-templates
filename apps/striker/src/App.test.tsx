import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Striker — Football Club Template')
  })

  it('renders every template section in order', () => {
    const { container } = render(<App />)
    for (const id of ['home', 'matches', 'news', 'players', 'blog', 'contact']) {
      expect(container.querySelector(`#${id}`)).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('World Cup Event')
    expect(screen.getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Videos' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Blog' })).toBeInTheDocument()
  })

  it('renders the navbar wordmark, hero CTAs and the Component Dock footer link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Striker' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book Ticket' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
