import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Cartly appears in TopBar email, Navbar, Footer heading, and Footer copyright
    expect(screen.getAllByText(/Cartly/i).length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText(/Men Collection/i)).toBeInTheDocument()
    expect(screen.getByText(/Money Back Guarantee/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Featured Product/i })).toBeInTheDocument()
    expect(screen.getByText(/50% Off/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /New Products/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Latest Blog/i })).toBeInTheDocument()
    expect(screen.getByText(/Subscribe to Our Newsletter/i)).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/i)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Cartly — Ecommerce Landing Template')
  })
})
