import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /fill the form/i })).toBeInTheDocument()
  })

  it('renders the sidebar heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /let's talk about everything/i }),
    ).toBeInTheDocument()
  })

  it('renders the form', () => {
    render(<App />)
    expect(screen.getByPlaceholderText(/first name/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
