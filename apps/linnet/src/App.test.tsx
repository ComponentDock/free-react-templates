import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Linnet — Business Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /We Provide Creative Business Solutions/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /We Offer Quick/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Why Choose Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Professional Skill/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Portfolio Project/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Expert Team/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Pricing Plan/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest Blog/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Contact Now/i })).toBeInTheDocument()
  })
})
