import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full contact page', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /contact form #09/i })).toBeInTheDocument()
    expect(screen.getByText('Get in touch with us')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders the contact info section', () => {
    render(<App />)
    expect(screen.getByText(/address/i)).toBeInTheDocument()
    expect(screen.getByText(/phone/i)).toBeInTheDocument()
    expect(screen.getByText(/email/i)).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
