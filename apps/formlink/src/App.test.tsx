import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /formlink — contact form/i })).toBeInTheDocument()
  })

  it('renders the Contact Us heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<App />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders the Send Message button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders info boxes with address and phone', () => {
    render(<App />)
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
    expect(screen.getByText(/\+ 1235 2355 98/)).toBeInTheDocument()
  })

  it('renders info boxes with email and website links', () => {
    render(<App />)
    const emailLink = screen.getByRole('link', { name: /info@yoursite\.com/ })
    expect(emailLink).toHaveAttribute('href', 'mailto:info@yoursite.com')
    const webLink = screen.getByRole('link', { name: /^yoursite\.com$/ })
    expect(webLink).toHaveAttribute('href', '#')
  })
})
