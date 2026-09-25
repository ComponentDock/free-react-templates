import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    document.title = ''
  })

  it('renders the Makely logo', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /^Makely/ })).toBeInTheDocument()
  })

  it('renders all section headings', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /We Love To Build/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Features/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Gallery/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Testimonials/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /About Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Team/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Blog/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Contact Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Let's Get Started/i })).toBeInTheDocument()
  })

  it('renders the footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the navigation', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
