import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Member Login heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /member login/i })).toBeInTheDocument()
  })

  it('renders email and password fields', () => {
    render(<App />)
    expect(document.getElementById('email')).toBeInTheDocument()
    expect(document.getElementById('password')).toBeInTheDocument()
  })

  it('renders Login button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('More templates at Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders Forgot Username / Password link', () => {
    render(<App />)
    expect(screen.getByText('Username / Password?')).toHaveAttribute('href', '#forgot')
  })

  it('renders Create your Account link', () => {
    render(<App />)
    expect(screen.getByText(/create your account/i)).toHaveAttribute('href', '#register')
  })

  it('has gradient background container', () => {
    render(<App />)
    const bgDiv = document.querySelector('[style*="linear-gradient"]')
    expect(bgDiv).toBeInTheDocument()
  })

  it('has white card container', () => {
    render(<App />)
    const card = document.querySelector('.bg-white')
    expect(card).toBeInTheDocument()
  })

  it('renders hero image', () => {
    render(<App />)
    const img = screen.getByAltText('Welcome illustration')
    expect(img).toBeInTheDocument()
    expect(img.getAttribute('src')).toContain('picsum.photos')
  })

  it('renders email placeholder', () => {
    render(<App />)
    const input = document.getElementById('email') as HTMLInputElement
    expect(input.placeholder).toBe('Email')
  })

  it('renders password placeholder', () => {
    render(<App />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input.placeholder).toBe('Password')
  })
})
