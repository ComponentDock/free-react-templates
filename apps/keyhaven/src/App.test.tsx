import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Keyhaven — Real Estate Template')
  })

  it('composes every section with landmarks and a skip link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /skip to main content/i })).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Find Your Dream Home/i)
    expect(screen.getByRole('heading', { name: 'Featured Properties' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Why Choose Keyhaven' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Meet Our Agents' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'What Our Clients Say' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Ready to Find Your Dream Home?' }),
    ).toBeInTheDocument()
  })
})
