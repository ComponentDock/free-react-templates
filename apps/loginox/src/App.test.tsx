import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Loginox heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /loginox/i })).toBeInTheDocument()
  })

  it('renders the Have an account? subheading', () => {
    render(<App />)
    expect(screen.getByText('Have an account?')).toBeInTheDocument()
  })

  it('renders username and password fields', () => {
    render(<App />)
    expect(document.getElementById('username')).toBeInTheDocument()
    expect(document.getElementById('password')).toBeInTheDocument()
  })

  it('renders Sign In button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('More templates at Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders Forgot Password link', () => {
    render(<App />)
    expect(screen.getByText('Forgot Password')).toHaveAttribute('href', '#forgot')
  })

  it('renders Remember Me checkbox', () => {
    render(<App />)
    const checkbox = document.getElementById('remember-me') as HTMLInputElement
    expect(checkbox).toBeInTheDocument()
    expect(checkbox.checked).toBe(true)
  })

  it('renders divider text', () => {
    render(<App />)
    expect(screen.getByText('— Or Sign In With —')).toBeInTheDocument()
  })

  it('renders Facebook social button', () => {
    render(<App />)
    expect(screen.getByText('Facebook')).toHaveAttribute('href', '#facebook')
  })

  it('renders Twitter social button', () => {
    render(<App />)
    expect(screen.getByText('Twitter')).toHaveAttribute('href', '#twitter')
  })

  it('has background image container', () => {
    render(<App />)
    const bgDiv = document.querySelector('[style*="picsum.photos"]')
    expect(bgDiv).toBeInTheDocument()
  })

  it('has dark overlay', () => {
    render(<App />)
    const overlay = document.querySelector('.bg-black\\/30')
    expect(overlay).toBeInTheDocument()
  })

  it('renders password toggle button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
  })
})
