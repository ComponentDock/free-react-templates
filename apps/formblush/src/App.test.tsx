import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('FormBlush — Sign Up Form Template')
  })

  it('renders the sign up form', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Sign Up')
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the main content area', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<App />)
    expect(screen.getByLabelText('Username:')).toBeInTheDocument()
    expect(screen.getByLabelText('E-mail:')).toBeInTheDocument()
    expect(screen.getByLabelText('Password:')).toBeInTheDocument()
  })

  it('renders the decorative photo', () => {
    render(<App />)
    const images = screen.getAllByAltText('Decorative photo')
    expect(images.length).toBeGreaterThanOrEqual(1)
  })
})
