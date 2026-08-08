import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Lintel — Architecture Template')
  })

  it('composes every section in the page landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /We Are Specialist In The Field of Architect/i,
    )
    expect(screen.getByRole('heading', { name: /Welcome To Our Company/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What We Do/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Blog and Updates/i })).toBeInTheDocument()
  })
})
