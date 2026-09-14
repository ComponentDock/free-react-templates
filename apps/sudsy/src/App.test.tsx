import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sudsy — Car Wash & Detailing Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Car Wash & Detailing/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /latest equipment/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Pricing/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What Our Customers Say/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /car will look as your new one/i }),
    ).toBeInTheDocument()
  })
})
