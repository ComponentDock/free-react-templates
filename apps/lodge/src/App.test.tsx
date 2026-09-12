import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Lodge').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/We hope you'll enjoy/)).toBeDefined()
    expect(screen.getByText('Junior Suite')).toBeDefined()
    expect(screen.getAllByText('Facilities').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Guestbook')).toBeDefined()
    expect(screen.getByText(/Follow us on Instagram/)).toBeDefined()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Lodge — Luxury Hotel Template')
  })

  it('has header, main, and footer landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeDefined()
    expect(screen.getByRole('main')).toBeDefined()
    expect(screen.getByRole('contentinfo')).toBeDefined()
  })

  it('renders Component Dock link in footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link.getAttribute('href')).toBe('https://www.componentdock.com/')
  })
})
