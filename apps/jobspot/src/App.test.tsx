import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('JobSpot — Job Board Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Jobs Listed Here/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Explore by Category/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Featured Jobs Posts/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Get Started Your New Job/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Happy Clients/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest Candidates/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent Blog/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Subscribe to our Newsletter/i }),
    ).toBeInTheDocument()
  })
})
