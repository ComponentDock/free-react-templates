import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the gradient background', () => {
    render(<App />)
    const bg = screen.getByTestId('app-background')
    expect(bg).toBeInTheDocument()
  })

  it('sets the page title on mount', () => {
    render(<App />)
    expect(document.title).toBe('ContactBreeze — Contact Form Template')
  })

  it('renders the contact form', () => {
    render(<App />)
    expect(screen.getByText('Say Hello!')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders a full-page gradient background div', () => {
    render(<App />)
    const bg = screen.getByTestId('app-background')
    const gradientDiv = bg.querySelector('[style*="linear-gradient"]')
    expect(gradientDiv).toBeInTheDocument()
  })
})
