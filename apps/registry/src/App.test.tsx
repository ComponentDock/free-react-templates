import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Registry — Registration Form Template')
  })

  it('renders the registration form heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /registration form/i })).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders a background image', () => {
    const { container } = render(<App />)
    const bgImg = container.querySelector('img[aria-hidden="true"]')
    expect(bgImg).toBeInTheDocument()
  })
})
