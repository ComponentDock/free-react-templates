import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Welcome heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /welcome/i })).toBeInTheDocument()
  })

  it('renders email and password fields', () => {
    render(<App />)
    expect(document.getElementById('email')).toBeInTheDocument()
    expect(document.getElementById('password')).toBeInTheDocument()
  })

  it('renders LOGIN button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('Sign Up')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders user avatar', () => {
    render(<App />)
    expect(screen.getByRole('img', { name: /user avatar/i })).toBeInTheDocument()
  })

  it('renders "Don\'t have an account?" text', () => {
    render(<App />)
    expect(screen.getByText(/don't have an account/i)).toBeInTheDocument()
  })
})
