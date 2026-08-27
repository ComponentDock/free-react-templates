import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title heading', () => {
    render(<App />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toContain('#04')
    expect(heading.textContent).toContain('Bootstrap Buttons')
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('BtnPulse — Button Showcase Template')
  })

  it('renders the size buttons section', () => {
    render(<App />)

    expect(screen.getByText('Large')).toBeInTheDocument()
    expect(screen.getByText('Medium')).toBeInTheDocument()
    expect(screen.getByText('Small')).toBeInTheDocument()
  })

  it('renders the color buttons section', () => {
    render(<App />)

    expect(screen.getByText('Primary')).toBeInTheDocument()
    expect(screen.getByText('Blue Gray')).toBeInTheDocument()
  })

  it('renders the full-width block button', () => {
    render(<App />)

    const blockBtn = screen.getByText('Full width button')
    expect(blockBtn).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)

    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the contentinfo landmark', () => {
    render(<App />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
