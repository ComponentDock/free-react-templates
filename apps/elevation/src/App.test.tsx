import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Elevation — Architecture Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1, name: /Precise Concept/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Precise Concept Design for Stylish Living/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Quick Facts/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Fanny Spencer/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent Projects/i })).toBeInTheDocument()
  })
})
