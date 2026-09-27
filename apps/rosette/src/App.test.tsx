import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the sr-only heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /rosette/i })).toBeInTheDocument()
  })

  it('renders the Sign Up form', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /sign up/i })).toBeInTheDocument()
  })

  it('renders the hero images', () => {
    render(<App />)
    expect(screen.getByRole('img', { name: /portrait/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /products/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders form fields', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('NAME')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('E-MAIL')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('PASSWORD')).toBeInTheDocument()
  })

  it('renders the SIGN UP button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
  })
})
