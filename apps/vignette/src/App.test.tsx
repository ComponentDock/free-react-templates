import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Vignette — Fashion E-commerce Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Fashion Trends/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'New Arrivals' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
  })
})
