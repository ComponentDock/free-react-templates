import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Terracotta — Architecture & Design Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: /Terracotta latest project/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: /About Us/i }).length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { name: /our service/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /our project/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Blog Post/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Melbourne/i })).toBeInTheDocument()
  })
})
