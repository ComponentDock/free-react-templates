import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('ShearGlow — Hair Salon')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /We Care About Your Hair/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Hair Salon/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Why Choose Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Portfolio/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Experts/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest News/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Make ShearGlow/i })).toBeInTheDocument()
  })
})
