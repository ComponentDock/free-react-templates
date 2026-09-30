import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the white page heading above the card', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 1, name: /sign up #09/i })
    expect(heading).toBeInTheDocument()
    expect(heading.className).toContain('text-white')
  })

  it('renders the photographic backdrop from a deterministic placeholder', () => {
    render(<App />)
    const bg = screen.getByTestId('page-background')
    expect(bg).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/signum-1'))
    expect(bg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the blue→pink gradient overlay at 40% opacity', () => {
    const { container } = render(<App />)
    const overlay = container.querySelector('[data-testid="gradient-overlay"]')
    expect(overlay).not.toBeNull()
    expect(overlay).toHaveAttribute('aria-hidden', 'true')
    expect(overlay?.className).toContain('linear-gradient(45deg')
    expect(overlay?.className).toContain('#0360ed')
    expect(overlay?.className).toContain('#ff5db1')
    expect(overlay?.className).toContain('opacity-40')
  })

  it('renders the card heading and all form fields', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: /^create your account$/i }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/^full name$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^email address$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^confirm password$/i)).toBeInTheDocument()
  })

  it('renders the Sign Up button and Sign In link', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /^sign up$/i })).toHaveAttribute('type', 'submit')
    expect(screen.getByRole('link', { name: /sign in/i })).toHaveAttribute('href', '#signin')
  })

  it('renders two independent password toggles', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /show confirm password/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
