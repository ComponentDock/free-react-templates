import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Pavilion — Hotel Template')
  })

  it('composes every section in the page', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Top Hotel in the City/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Choose Your Room/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Dining and Drinks/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Swimming Pool/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Blog/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What Our Guests Say/i })).toBeInTheDocument()
  })
})
