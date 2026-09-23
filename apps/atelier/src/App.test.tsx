import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Atelier — Creative Agency Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Create, Code, and Published/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Ratings/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Working Process/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What We Provide/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest Blog Posts/i })).toBeInTheDocument()
  })
})
