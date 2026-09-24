import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders Sign In heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders the login form', () => {
    render(<App />)
    expect(document.getElementById('username')).toBeInTheDocument()
    expect(document.getElementById('password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText('More templates at Component Dock')).toBeInTheDocument()
  })

  it('renders the background image', () => {
    render(<App />)
    const img = document.querySelector('img[src*="loginauth"]') as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.alt).toBe('')
  })
})
