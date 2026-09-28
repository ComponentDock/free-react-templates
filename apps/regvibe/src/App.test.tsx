import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the registration form', () => {
    render(<App />)

    const headings = screen.getAllByRole('heading', { name: /sign up/i })
    expect(headings.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)

    expect(screen.getByText(/made with/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders the gradient background', () => {
    const { container } = render(<App />)

    const main = container.querySelector('main')
    expect(main).toHaveClass('bg-gradient-to-br')
  })

  it('renders all form fields', () => {
    render(<App />)

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i, { selector: '#password' })).toBeInTheDocument()
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
  })

  it('renders the sign-in link', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /sign in/i })).toHaveAttribute('href', '#signin')
  })
})
