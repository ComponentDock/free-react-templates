import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the gradient background', () => {
    const { container } = render(<App />)
    const bg = container.firstElementChild as HTMLElement
    expect(bg).toHaveStyle({
      background: 'linear-gradient(45deg, var(--color-brand-cyan), var(--color-brand-magenta))',
    })
  })

  it('renders the login card centered on the page', () => {
    const { container } = render(<App />)
    const card = container.querySelector('.max-w-\\[680px\\]')
    expect(card).toBeInTheDocument()
  })

  it('renders the heading "Sign In With"', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Sign In With')
  })

  it('renders social login buttons', () => {
    render(<App />)
    expect(screen.getByText('Facebook')).toBeInTheDocument()
    expect(screen.getByText('Google')).toBeInTheDocument()
  })

  it('renders username and password fields', () => {
    render(<App />)
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })

  it('renders the Sign In button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders the sign up section', () => {
    render(<App />)
    expect(screen.getByText('Not a member?')).toBeInTheDocument()
    expect(screen.getByText('Sign up now')).toBeInTheDocument()
  })

  it('renders the Component Dock footer', () => {
    render(<App />)
    const link = screen.getByText('Made with Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the geometric pattern', () => {
    const { container } = render(<App />)
    const svg = container.querySelector('svg[aria-hidden="true"]')
    expect(svg).toBeInTheDocument()
  })
})
