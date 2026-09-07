import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the wizard', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /event information/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders step indicator navigation', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: /registration steps/i })).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
  })
})
