import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title heading', () => {
    render(<App />)
    expect(document.title).toBe('Timber — Interior Design & Construction Studio')
  })

  it('renders the navigation', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /An Inspiring Built Space/i })).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Welcome/i })).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /What I do\?/i })).toBeInTheDocument()
  })

  it('renders the portfolio section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /My Work/i })).toBeInTheDocument()
  })

  it('renders the blog section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Read Recent Blog/i })).toBeInTheDocument()
  })

  it('renders the contact section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Get in Touch!/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
