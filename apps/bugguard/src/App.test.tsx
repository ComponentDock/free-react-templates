import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('BugGuard — Pest Control Service Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getAllByRole('contentinfo').length).toBeGreaterThanOrEqual(1)

    expect(
      screen.getByRole('heading', { level: 1, name: /Keep your House clean/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Welcome to the Pest Control/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Why People Choose/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Latest Blog Post' })).toBeInTheDocument()
  })
})
