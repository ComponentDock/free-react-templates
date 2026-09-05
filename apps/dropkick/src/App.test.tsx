import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Dropdown #09')
  })

  it('renders the View Details button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /view details/i })).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Dropkick — Dropdown with Image Details')
  })
})
