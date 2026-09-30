import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title above the card', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /sign up #08/i })).toBeInTheDocument()
  })

  it('renders the card heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: /^sign up$/i })).toBeInTheDocument()
  })

  it('renders all form fields with accessible labels', () => {
    render(<App />)
    expect(screen.getByLabelText(/^full name$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^email address$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
  })

  it('renders the Continue button and Sign In link', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /continue/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders the password toggle button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
