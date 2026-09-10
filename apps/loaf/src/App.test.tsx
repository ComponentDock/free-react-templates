import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    // Navbar
    expect(screen.getByRole('link', { name: 'Loaf' })).toBeInTheDocument()
    // Hero
    expect(screen.getByRole('heading', { name: /Whenever we bake/i })).toBeInTheDocument()
    // About
    expect(screen.getByRole('heading', { name: /Brand new app/i })).toBeInTheDocument()
    // Categories
    expect(screen.getByRole('heading', { name: /Our Categories/i })).toBeInTheDocument()
    // Video
    expect(screen.getByRole('heading', { name: /Watch our baking/i })).toBeInTheDocument()
    // Testimonials
    expect(screen.getByRole('heading', { name: /Enjoy our Client/i })).toBeInTheDocument()
    // Blog
    expect(screen.getByRole('heading', { name: /Latest from Our Blog/i })).toBeInTheDocument()
    // Footer
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Loaf — Bakery Template')
  })
})
