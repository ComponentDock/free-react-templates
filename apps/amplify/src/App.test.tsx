import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all template sections in order', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Amplify makes your biz/)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Portfolio' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Latest Blogs' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Subscribe to our Newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/ })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Amplify — Digital Marketing Agency Template')
  })
})
