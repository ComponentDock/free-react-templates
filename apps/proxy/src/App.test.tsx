import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Proxy — Real Estate Agent Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Your Realtor/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Popular Properties/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Happy Customers/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent Blog Post/i })).toBeInTheDocument()
  })
})
