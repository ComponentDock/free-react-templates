import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Welcome heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /welcome/i })).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<App />)
    expect(screen.getByText(/sign in by entering the information below/i)).toBeInTheDocument()
  })

  it('renders username and password fields', () => {
    render(<App />)
    expect(document.getElementById('username')).toBeInTheDocument()
    expect(document.getElementById('password')).toBeInTheDocument()
  })

  it('renders Get Started button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('More templates at Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders avatar image', () => {
    render(<App />)
    expect(screen.getByRole('img', { name: /user avatar/i })).toBeInTheDocument()
  })

  it('renders Forgot Password link', () => {
    render(<App />)
    expect(screen.getByText('Forgot Password')).toHaveAttribute('href', '#forgot')
  })

  it('renders Sign Up link', () => {
    render(<App />)
    expect(screen.getByText('Sign Up')).toHaveAttribute('href', '#signup')
  })

  it('renders dark navy card', () => {
    render(<App />)
    const card = document.querySelector('.bg-\\[var\\(--color-card\\)\\]')
    expect(card).toBeInTheDocument()
  })
})
