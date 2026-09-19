import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Kicks — Shoe Store Template')
  })

  it('composes every section', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders sale banner', () => {
    render(<App />)
    expect(screen.getByText(/25% off Everything/)).toBeInTheDocument()
  })

  it('renders hero section', () => {
    render(<App />)
    expect(screen.getByText(/New trending shoes/)).toBeInTheDocument()
  })

  it('renders intro quote', () => {
    render(<App />)
    expect(screen.getByText(/It started with a simple idea/)).toBeInTheDocument()
  })

  it('renders shop by gender section', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Shop Men's Collection/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Shop Women's Collection/ })).toBeInTheDocument()
  })

  it('renders best sellers', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Best Sellers' })).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText(/Built by Component Dock/)).toBeInTheDocument()
  })
})
