import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('LookCraft — Photography Portfolio')
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 1 }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the gallery section', () => {
    render(<App />)
    expect(screen.getByRole('region', { name: /gallery/i })).toBeInTheDocument()
  })

  it('renders the blog section', () => {
    render(<App />)
    expect(screen.getByRole('region', { name: /blog/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
