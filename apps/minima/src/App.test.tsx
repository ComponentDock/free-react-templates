import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: /about us/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { name: /our works/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /clients say/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /recent blog/i })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the brand in navbar and footer', () => {
    render(<App />)
    const brands = screen.getAllByText('minima')
    expect(brands.length).toBeGreaterThanOrEqual(2)
  })

  it('renders Component Dock in footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
