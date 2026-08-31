import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Lattice heading and portfolio grid', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: /portfolio gallery/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6)
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Lattice — Portfolio Gallery Template')
  })

  it('renders the navbar with brand name', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /lattice/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(footer).toContainElement(link)
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
