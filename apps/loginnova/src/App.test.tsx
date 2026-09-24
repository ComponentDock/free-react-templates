import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders ACCOUNT LOGIN heading', () => {
    render(<App />)
    expect(screen.getByText('Account Login')).toBeInTheDocument()
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

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('Forgot password?')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('LoginNova — Account Login')
  })

  it('renders gradient background', () => {
    render(<App />)
    const el = screen.getByText('Account Login')
    const wrapper = el.closest('div')?.parentElement
    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveStyle({
      background:
        'linear-gradient(to right, var(--color-gradient-start), var(--color-gradient-end))',
    })
  })
})
