import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Elixir — Pharmacy & Supplement Store Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Welcome To Elixir/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Free Shipping/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Popular Products/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /New Products/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Testimonials/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Elixir Products/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Rated by Experts/i })).toBeInTheDocument()
  })
})
