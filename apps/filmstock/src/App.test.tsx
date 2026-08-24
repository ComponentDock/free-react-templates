import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the Filmstock site name', () => {
    render(<App />)
    expect(screen.getAllByText('Filmstock').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the skip-to-content link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Skip to content/i })).toBeInTheDocument()
  })

  it('renders the gallery section', () => {
    render(<App />)
    expect(screen.getByRole('region', { name: /Photo gallery/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Filmstock — Photography Portfolio')
  })
})
