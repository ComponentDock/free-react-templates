import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(document.title).toBe('Photomuse — Photographer Portfolio Template')
  })

  it('renders the sidebar with author name', () => {
    render(<App />)
    const names = screen.getAllByText('Louie Smith')
    expect(names.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the sidebar newsletter section', () => {
    render(<App />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByText("Hello! I'm")).toBeInTheDocument()
    expect(screen.getByText(/A Photographer/)).toBeInTheDocument()
  })

  it('renders the instagram grid', () => {
    render(<App />)
    expect(screen.getByText('Follow me on Instagram')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders navigation links in the sidebar', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /collection/i })).toBeInTheDocument()
  })
})
