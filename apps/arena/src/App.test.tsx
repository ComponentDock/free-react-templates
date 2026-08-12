import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Arena — Gaming Template')
  })

  it('composes navbar, sections and footer in the expected landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders every section of the page', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /live stareams/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest War Fight/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /All Fighter/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Upcoming Fighter/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Pricing plans/i })).toBeInTheDocument()
  })
})
