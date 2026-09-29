import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the search hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/search hotel/i)
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText('Stayquest')).toBeInTheDocument()
  })

  it('renders the Component Dock link in footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
