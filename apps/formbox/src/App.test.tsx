import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the contact form', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /send us a message/i })).toBeInTheDocument()
  })

  it('renders the contact sidebar', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /contact information/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
