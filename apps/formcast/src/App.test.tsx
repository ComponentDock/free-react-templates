import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /drop us a message/i })).toBeInTheDocument()
  })

  it('renders the contact card', () => {
    render(<App />)

    expect(screen.getByTestId('contact-card')).toBeInTheDocument()
  })

  it('renders the envelope icon', () => {
    render(<App />)

    expect(screen.getByTestId('envelope-icon')).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<App />)

    expect(screen.getByTestId('contact-form')).toBeInTheDocument()
  })

  it('renders the map background', () => {
    render(<App />)

    expect(screen.getByTestId('map-background')).toBeInTheDocument()
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

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('FormCast — Contact Form Template')
  })
})
