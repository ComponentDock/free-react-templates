import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Gracious — Charity & Nonprofit Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Doing Nothing is Not An Option/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Popular Causes/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest Donations/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Photo Gallery/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /From Our Blog/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Events/i })).toBeInTheDocument()
  })
})
