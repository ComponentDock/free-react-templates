import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in order', () => {
    render(<App />)

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Create, Code, and Launch.')
    expect(screen.getByText('99.55%')).toBeInTheDocument()
    expect(screen.getByText('How it works')).toBeInTheDocument()
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0)
    expect(screen.getByText('Adam Aderson')).toBeInTheDocument()
    expect(screen.getByText('Latest Blog Posts')).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sketch — Design Agency Template')
  })
})
