import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(document.title).toBe('Reflexly — Photography Studio Template')
  })

  it('renders the header with logo', () => {
    render(<App />)
    const logos = screen.getAllByText('Reflexly')
    expect(logos.length).toBeGreaterThanOrEqual(1)
    const link = logos[0]!.closest('a')
    expect(link).not.toBeNull()
    expect(link?.getAttribute('href')).toBe('/')
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /photography studio/i }),
    ).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<App />)
    expect(screen.getByText('Shooting')).toBeInTheDocument()
    expect(screen.getByText('Videos')).toBeInTheDocument()
    expect(screen.getByText('Editing')).toBeInTheDocument()
  })

  it('renders the categories section', () => {
    render(<App />)
    expect(screen.getByText('Animal')).toBeInTheDocument()
    expect(screen.getAllByText('Natural').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the portfolio section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: /portfolio/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('has a main element', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('has a footer element', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
