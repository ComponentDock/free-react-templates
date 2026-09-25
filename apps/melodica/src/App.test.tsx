import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full page with all sections', () => {
    render(<App />)

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /feel the music/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /crafting sound since 2010/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /latest releases/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /tour dates/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /moments captured/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /subscribe/i })).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Melodica — Music Artist Landing Template')
  })
})
