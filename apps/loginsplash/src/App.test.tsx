import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Login heading', () => {
    render(<App />)
    expect(screen.getByText('Login', { selector: 'span' })).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<App />)
    expect(document.getElementById('email')).toBeInTheDocument()
  })

  it('renders the password input', () => {
    render(<App />)
    expect(document.getElementById('password')).toBeInTheDocument()
  })

  it('renders the Login button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    expect(screen.getByText('More templates at Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Loginsplash — Vibrant Login Form')
  })
})
