import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Closet page with brand name', () => {
    render(<App />)
    expect(screen.getByText('Closet')).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Closet — Fashion Boutique Template')
  })

  it('renders hero content', () => {
    render(<App />)
    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
    expect(screen.getByText('Summer Wear')).toBeInTheDocument()
  })

  it('renders popular products section', () => {
    render(<App />)
    expect(screen.getByText('Popular on Closet')).toBeInTheDocument()
  })

  it('renders newsletter section', () => {
    render(<App />)
    expect(screen.getByText('Sign Up for a Newsletter')).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
