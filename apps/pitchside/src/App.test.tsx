import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Pitchside — Sports News & Fixtures Template')
  })

  it('renders every template section with its anchor id', () => {
    const { container } = render(<App />)
    for (const id of [
      'home',
      'schedule',
      'results',
      'feed',
      'club',
      'latest',
      'popular',
      'contact',
    ]) {
      expect(container.querySelector(`#${id}`)).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Northgate')
    expect(screen.getByRole('heading', { level: 2, name: 'Trending News' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Latest News' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Hot Videos' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Popular Post' })).toBeInTheDocument()
  })

  it('renders the header wordmark, hero CTA and the Component Dock footer link', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: /Pitchside/i }).length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: 'More Details' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
