import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(document.title).toBe('Toolkit — UI Kit Showcase Template')
  })

  it('renders the Navbar', () => {
    render(<App />)
    expect(screen.getByText('Tools Kit.')).toBeInTheDocument()
  })

  it('renders the Hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tools UI Kit.')
  })

  it('renders the Basic Elements section', () => {
    render(<App />)
    expect(screen.getByText('Basic Elements')).toBeInTheDocument()
  })

  it('renders the Footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
