import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Cantilever — Architecture Template')
  })

  it('composes every section in the page landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /Precise concept design for stylish living/i,
    )
    expect(screen.getByRole('heading', { name: /Welcome to Cantilever/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /What we offer to our clients/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Our Recent Completed Projects/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What Customer Say About Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent From Our Blog/i })).toBeInTheDocument()
  })
})
