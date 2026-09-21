import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Skyline')
    expect(screen.getByText(/Fine Dining Restaurant/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Menu/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Gallery/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Reserve a Table/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Chef/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Featured Dishes/i })).toBeInTheDocument()
    expect(screen.getByText(/432 Wyandotte Ave/i)).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/i)).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Skyline — Restaurant Template')
  })

  it('renders the Component Dock link in the footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
