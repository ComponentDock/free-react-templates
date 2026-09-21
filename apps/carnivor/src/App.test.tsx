import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Carnivor — Steakhouse Landing Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Carnivor').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
