import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Gatekeeper — Login Form Template')
  })

  it('renders the login card', () => {
    render(<App />)
    expect(screen.getByRole('region', { name: /login card/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
