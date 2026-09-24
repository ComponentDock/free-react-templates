import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Account Login heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /account login/i })).toBeInTheDocument()
  })

  it('renders Login button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('renders Forgot Password link', () => {
    render(<App />)
    expect(screen.getByText('Forgot Password?')).toHaveAttribute('href', '#forgot')
  })

  it('renders Remember me checkbox', () => {
    render(<App />)
    expect(screen.getByRole('checkbox', { name: /remember me/i })).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('More templates at Component Dock')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders centered card layout', () => {
    render(<App />)
    const container = document.querySelector('.flex.min-h-screen')
    expect(container).toBeInTheDocument()
  })

  it('has correct page title', () => {
    render(<App />)
    expect(document.title).toBe('Loginpad — Account Login Form')
  })
})
