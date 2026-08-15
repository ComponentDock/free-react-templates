import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all template sections in order', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'The Simplest Way to Find Property',
    )
    expect(
      screen.getByRole('heading', { level: 2, name: 'The smartest way to buy a home' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Exclusive Offer For You' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'How it works' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'We Put People First.' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Happy Clients' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Agents' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/ })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Homestead — Real Estate Agency Template')
  })
})
