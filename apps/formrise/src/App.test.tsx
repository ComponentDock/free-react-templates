import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /contact form #07/i })).toBeInTheDocument()
  })

  it('renders the Write us heading in the form', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /write us/i })).toBeInTheDocument()
  })

  it('renders the Contact information heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /contact information/i })).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<App />)
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/subject/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument()
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

  it('renders contact info with address and phone', () => {
    render(<App />)
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
    expect(screen.getByText(/1235 2355 98/)).toBeInTheDocument()
  })

  it('renders contact info with email', () => {
    render(<App />)
    expect(screen.getByText('info@yoursite.com')).toBeInTheDocument()
  })

  it('renders contact info with website', () => {
    render(<App />)
    expect(screen.getByText('yoursite.com')).toBeInTheDocument()
  })

  it('renders the dark card container', () => {
    const { container } = render(<App />)
    const card = container.querySelector('.bg-card-dark')
    expect(card).toBeInTheDocument()
  })

  it('renders the vertical divider', () => {
    render(<App />)
    expect(screen.getByTestId('divider')).toBeInTheDocument()
  })
})
