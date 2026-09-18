import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Blitz — Creative Agency Template')
  })

  it('renders the logo text', () => {
    render(<App />)
    const logoLinks = screen.getAllByRole('link', { name: /blitz/i })
    expect(logoLinks.length).toBeGreaterThanOrEqual(1)
  })
})
