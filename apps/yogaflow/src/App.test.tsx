import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('YogaFlow — Registration Form Template')
  })

  it('renders the registration form', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Make An Appointment')
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)

    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the main content area', () => {
    render(<App />)

    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
