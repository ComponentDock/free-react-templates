import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Kreativ — Creative Agency Template')
  })

  it('composes every section with landmarks and a skip link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /skip to main content/i })).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /We Create Bold Digital Experiences/i,
    )
    expect(screen.getByRole('heading', { name: 'What We Do' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Selected Work' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'What Clients Say' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "Let's Work Together" })).toBeInTheDocument()
  })
})
