import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the background', () => {
    render(<App />)
    const bg = screen.getByTestId('app-background')
    expect(bg).toBeInTheDocument()
  })

  it('sets the page title on mount', () => {
    render(<App />)
    expect(document.title).toBe('ContactWave — Contact Form Template')
  })

  it('renders the contact form heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('applies the light gray background color', () => {
    render(<App />)
    const bg = screen.getByTestId('app-background')
    expect(bg).toHaveStyle({ backgroundColor: '#f5f5f5' })
  })
})
