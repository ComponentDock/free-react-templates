import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Mint — Architecture & Interior Design Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: /Experience Interior Design/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What we offer/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Why Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Testimonials/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Works/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Blog Posts/i })).toBeInTheDocument()
  })
})
