import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Our Agency' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Portfolio' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Meet Our Team' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'What Clients Say' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get In Touch' })).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Krypton — Digital Agency Template')
  })

  it('includes the Component Dock link in the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
