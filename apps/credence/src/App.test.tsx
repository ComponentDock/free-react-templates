import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(document.title).toBe('Credence — CV/Portfolio Template')
  })

  it('renders ContactBar, Hero, Portfolio, and Footer sections', () => {
    render(<App />)
    // ContactBar
    expect(screen.getByText('3008 Sarah Drive')).toBeInTheDocument()
    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Michel.*Smith/i)
    // Portfolio
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Portfolio')
    // Footer
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
