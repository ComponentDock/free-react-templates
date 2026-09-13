import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Presswell — Laundry Service Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: /Quality laundry service/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /This is how we work/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Services we offer/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Call us for a service/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Company achievement/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /About company/i })).toBeInTheDocument()
  })
})
