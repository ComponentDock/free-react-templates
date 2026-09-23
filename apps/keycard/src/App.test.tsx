import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders login form', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('renders Component Dock footer', () => {
    render(<App />)
    expect(screen.getByText('More templates at Component Dock')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Keycard — Login Form Template')
  })
})
