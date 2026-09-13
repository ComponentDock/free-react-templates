import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Alibi — Lawyer Landing Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /A Corporate Lawyer/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Practice Areas/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Testimonials/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest From Blog/i })).toBeInTheDocument()
  })
})
