import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Contact Us heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Us')
  })

  it('renders the subtitle text', () => {
    render(<App />)
    expect(screen.getByText(/feel free to drop us a line/i)).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<App />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders the Submit button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
