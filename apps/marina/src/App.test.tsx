import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all template sections in order', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Marina home' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Explore, Discover The Ocean/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Welcome To Our Website' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Destinations' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Book A Yacht' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Team' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Customer Saying...' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Get In Touch With Us' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/ })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Marina — Yacht Charter Template')
  })
})
