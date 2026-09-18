import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('ContactViolet — Contact Form Template')
  })

  it('renders the contact form heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Us')
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /more templates at component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders the purple gradient overlay', () => {
    const { container } = render(<App />)
    const overlay = container.querySelector('.pointer-events-none.absolute.inset-0')
    expect(overlay).toBeInTheDocument()
  })
})
