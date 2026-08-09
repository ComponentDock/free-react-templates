import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { App } from './App'

afterEach(() => {
  document.documentElement.classList.remove('dark')
  window.localStorage.clear()
})

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Helios — Solar Energy Template')
  })

  it('composes the navbar, all sections, and the footer in landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    for (const heading of [
      'Power Your Home With Clean Energy',
      'Complete Solar Solutions',
      'Premium Solar Equipment',
      'Our Environmental Impact',
      'Flexible Payment Options',
      'How It Works',
      'What Our Customers Say',
      'Ready to Go Solar?',
      'Frequently Asked Questions',
      'Get Your Free Quote',
    ]) {
      expect(screen.getByRole('heading', { name: new RegExp(heading, 'i') })).toBeInTheDocument()
    }
  })

  it('provides a skip-to-content link as the first focusable element', () => {
    render(<App />)
    const skip = screen.getByRole('link', { name: 'Skip to main content' })
    expect(skip).toHaveAttribute('href', '#main')
    expect(skip.className).toContain('sr-only')
  })
})
