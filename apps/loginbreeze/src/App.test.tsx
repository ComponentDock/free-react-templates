import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Log In heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /log in/i })).toBeInTheDocument()
  })

  it('renders username and password fields', () => {
    render(<App />)
    expect(document.getElementById('username')).toBeInTheDocument()
    expect(document.getElementById('password')).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('More templates at Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the login card with gradient', () => {
    render(<App />)
    const card = document.querySelector('.bg-gradient-to-br')
    expect(card).toBeInTheDocument()
  })

  it('renders Login button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('renders Forgot Password link', () => {
    render(<App />)
    expect(screen.getByText('Forgot Password?')).toHaveAttribute('href', '#forgot')
  })

  it('renders remember me checkbox', () => {
    render(<App />)
    expect(screen.getByLabelText('Remember me')).not.toBeChecked()
  })

  it('renders background image', () => {
    render(<App />)
    const bg = screen.getByRole('img', { name: /city skyline background/i })
    expect(bg).toBeInTheDocument()
  })
})
