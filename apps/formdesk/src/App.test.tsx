import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /send us a message/i })).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<App />)

    expect(screen.getByTestId('contact-form')).toBeInTheDocument()
  })

  it('renders the desk photo panel', () => {
    render(<App />)

    expect(screen.getByTestId('desk-photo')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<App />)

    expect(screen.getByTestId('social-icons')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)

    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('has a footer link to Component Dock', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('sets the document title', async () => {
    render(<App />)

    expect(document.title).toBe('FormDesk — Contact Form Template')
  })
})
