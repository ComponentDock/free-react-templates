import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the contact heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Contact Us')
  })

  it('renders the contact form', () => {
    render(<App />)
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
