import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the header, main and footer landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Pixelpress — Gaming Blog Template')
  })

  it('renders key sections end to end', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Game on!' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Trending' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Promo video of the game' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe to our newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Login / Register' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Pinterest' }).length).toBeGreaterThan(0)
  })

  it('renders all section read-more links', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: 'Read More' }).length).toBeGreaterThan(3)
  })
})
