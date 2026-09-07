import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Picktag — Multi-Select Component')
  })

  it('renders the heading "Multi-Select #1"', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Multi-Select #1')
  })

  it('renders the instructional text', () => {
    render(<App />)
    expect(screen.getByText(/Tags separate with comma/)).toBeInTheDocument()
  })

  it('renders the multi-select component with placeholder', () => {
    render(<App />)
    expect(screen.getByText('Select options...')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /Component Dock/ })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders with no ColorLib references', () => {
    const { container } = render(<App />)
    expect(container.innerHTML).not.toMatch(/colorlib/i)
  })
})
