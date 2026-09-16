import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Shingle — Roofing Services Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Dedicated to Providing/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Get a Quote/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Best Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Done Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Happy Clients/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest News/i })).toBeInTheDocument()
  })
})
