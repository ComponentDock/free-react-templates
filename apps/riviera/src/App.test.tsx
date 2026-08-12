import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections with proper landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/A Luxury Stay/)
    expect(screen.getByRole('heading', { name: 'Check Availability' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Guestbook' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Riviera — Hotel & Spa Template')
  })
})
