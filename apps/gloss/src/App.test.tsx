import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Gloss — Makeup Artist Portfolio Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /the center of attention/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Professional makeup' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /what clients say/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Makeup artist tips' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Beauty products' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /20% discount/i })).toBeInTheDocument()
  })
})
