import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the navbar with brand', () => {
    render(<App />)
    expect(screen.getByText('FindBox')).toBeInTheDocument()
  })

  it('renders the search input', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Enter keyword and hit enter...')).toBeInTheDocument()
  })

  it('renders the content area', () => {
    render(<App />)
    expect(screen.getByText(/click the search icon/i)).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
