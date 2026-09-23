import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Sign In heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument()
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

  it('renders social login buttons', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /login with facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /login with twitter/i })).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('More templates at Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders hero image', () => {
    render(<App />)
    expect(screen.getByRole('img', { name: /decorative hero image/i })).toBeInTheDocument()
  })

  it('renders Forgot Password link', () => {
    render(<App />)
    expect(screen.getByText('Forgot Password')).toHaveAttribute('href', '#forgot')
  })

  it('renders Remember Me checkbox', () => {
    render(<App />)
    expect(screen.getByRole('checkbox', { name: /remember me/i })).toBeChecked()
  })

  it('renders Sign Up link', () => {
    render(<App />)
    expect(screen.getByText('Sign Up')).toHaveAttribute('href', '#signup')
  })

  it('renders the centered card container', () => {
    render(<App />)
    const card = document.querySelector('.max-w-\\[400px\\]')
    expect(card).toBeInTheDocument()
  })
})
