import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the login form', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Login')
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const footerLink = screen.getByRole('link', { name: /more templates at component dock/i })
    expect(footerLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(footerLink).toHaveAttribute('target', '_blank')
    expect(footerLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders email input field', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  })

  it('renders password input field', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  it('renders social login buttons', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /login with facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /login with twitter/i })).toBeInTheDocument()
  })

  it('renders login submit button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('renders sign up link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /sign up now/i })).toBeInTheDocument()
  })

  it('renders "Don\'t have an account?" text', () => {
    render(<App />)
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument()
  })

  it('renders "Login with email" subheading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Login with email')
  })
})
