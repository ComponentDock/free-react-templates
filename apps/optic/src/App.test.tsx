import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Optic — Photographer Portfolio')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /I'm Alex Morgan/i })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: 'Services' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'My Photography' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What Clients Are Saying/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Blog Posts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Say Hello' })).toBeInTheDocument()
  })
})
