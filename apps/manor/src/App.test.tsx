import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getAllByText('the manor').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('find your home')).toBeInTheDocument()
    expect(screen.getByText('search your home')).toBeInTheDocument()
    expect(screen.getByText('featured properties')).toBeInTheDocument()
    expect(screen.getByText('clients testimonials')).toBeInTheDocument()
    expect(screen.getByText('see how we operate')).toBeInTheDocument()
    expect(screen.getByText('cities clients prefer')).toBeInTheDocument()
    expect(screen.getByText(/Do you want to talk with one of our/)).toBeInTheDocument()
    expect(screen.getByText('subscribe to our newsletter')).toBeInTheDocument()
    expect(screen.getByText('useful links')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Manor — Real Estate Template')
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
