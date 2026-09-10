import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the wizard form', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('User Profile')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('FormVane — Multi-Step Wizard Template')
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
