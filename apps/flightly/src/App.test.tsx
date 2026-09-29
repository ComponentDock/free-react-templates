import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the flight search form', () => {
    render(<App />)
    expect(screen.getByRole('search')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/search flights/i)
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText('Flightly')).toBeInTheDocument()
  })

  it('renders the Component Dock link in footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
