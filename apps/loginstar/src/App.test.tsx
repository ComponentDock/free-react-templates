import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the LOGIN heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument()
  })

  it('renders username and password fields', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  it('renders Login button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('renders Remember me checkbox', () => {
    render(<App />)
    expect(screen.getByRole('checkbox', { name: /remember me/i })).toBeInTheDocument()
  })

  it('renders Forgot? link', () => {
    render(<App />)
    expect(screen.getByText('Forgot?')).toHaveAttribute('href', '#forgot')
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('More templates at Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('centers content vertically and horizontally', () => {
    render(<App />)
    const outer = document.querySelector('.min-h-screen')
    expect(outer).toBeInTheDocument()
    expect(outer?.className).toContain('items-center')
    expect(outer?.className).toContain('justify-center')
  })

  it('has a card container', () => {
    render(<App />)
    const card = document.querySelector('[class*="rounded-"]')
    expect(card).toBeInTheDocument()
    expect(card?.className).toContain('max-w-[390px]')
  })
})
