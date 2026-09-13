import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Tint — Interior Design Studio')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Hero + Video both have "Interior Design Conference" — use getAllByRole
    expect(screen.getAllByRole('heading', { name: /Interior Design Conference/i })).toHaveLength(2)
    expect(screen.getByRole('heading', { name: /We've been Creating/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Get to Know Project Estimate/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Flexible Working Hours/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Trends in Modern Interior Design/i }),
    ).toBeInTheDocument()
  })
})
