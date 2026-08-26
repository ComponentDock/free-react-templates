import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the accordion title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Bootstrap Accordion #7')
  })

  it('renders all three accordion items', () => {
    render(<App />)
    expect(screen.getByText('How to download and register?')).toBeInTheDocument()
    expect(screen.getByText('How to create your paypal account?')).toBeInTheDocument()
    expect(screen.getByText('How to link your paypal and bank account?')).toBeInTheDocument()
  })

  it('has the page background class', () => {
    const { container } = render(<App />)
    const wrapper = container.firstElementChild!
    expect(wrapper.className).toContain('bg-page')
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /more templates at component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('first item is expanded by default', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: 'How to download and register?' })
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('region', { name: 'How to download and register?' }),
    ).toBeInTheDocument()
  })
})
