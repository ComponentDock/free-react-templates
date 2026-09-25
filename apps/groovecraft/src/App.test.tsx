import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the navbar', () => {
    render(<App />)
    const brands = screen.getAllByText('Groovecraft')
    expect(brands.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /beyond time/i })).toBeInTheDocument()
  })

  it('renders the latest albums section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Latest Albums' })).toBeInTheDocument()
  })

  it('renders the buy now section', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /load more/i })).toBeInTheDocument()
  })

  it('renders the featured artist section', () => {
    render(<App />)
    expect(screen.getByText('Featured Artist')).toBeInTheDocument()
  })

  it('renders the music lists section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /new hits/i })).toBeInTheDocument()
  })

  it('renders the contact section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Groovecraft — Music Artist Template')
  })
})
