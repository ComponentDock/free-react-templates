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
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  it('renders social login buttons', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /login with facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login with twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login with google/i })).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('More templates at Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders hero image on desktop', () => {
    render(<App />)
    const hero = screen.getAllByRole('img', { name: /decorative city street image/i })
    expect(hero.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Log In button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument()
  })

  it('renders Forgot Password link', () => {
    render(<App />)
    expect(screen.getByText('Forgot Password')).toHaveAttribute('href', '#forgot')
  })

  it('renders remember me checkbox', () => {
    render(<App />)
    expect(screen.getByLabelText('Remember me')).not.toBeChecked()
  })
})
