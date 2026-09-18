import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Form #10')
  })

  it('renders the Contact us heading', () => {
    render(<App />)
    expect(screen.getByText('Contact us')).toBeInTheDocument()
  })

  it('renders the Get in touch heading', () => {
    render(<App />)
    expect(screen.getByText('Get in touch')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders all contact info items', () => {
    render(<App />)
    expect(screen.getByText('ADDRESS:')).toBeInTheDocument()
    expect(screen.getByText('PHONE:')).toBeInTheDocument()
    expect(screen.getByText('EMAIL:')).toBeInTheDocument()
    expect(screen.getByText('WEBSITE:')).toBeInTheDocument()
  })

  it('renders the form fields', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders the Send Message button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })
})
