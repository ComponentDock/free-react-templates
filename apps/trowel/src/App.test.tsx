import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { name: /Make your dream home/i })).toBeInTheDocument()
    // About
    expect(screen.getByRole('heading', { name: /We Are The Best/i })).toBeInTheDocument()
    // Services
    expect(screen.getByRole('heading', { name: 'Best Services For You' })).toBeInTheDocument()
    // Projects
    expect(screen.getByRole('heading', { name: 'Done Projects' })).toBeInTheDocument()
    // Testimonials
    expect(screen.getByRole('heading', { name: 'Happy Clients' })).toBeInTheDocument()
    // Blog
    expect(screen.getByRole('heading', { name: 'Recent Blog Posts' })).toBeInTheDocument()
  })
})
