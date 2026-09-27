import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full registration page', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Regpass')
    expect(screen.getByRole('heading', { name: /registration form/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /register now/i })).toBeInTheDocument()
  })

  it('links to Component Dock in the footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the hero image', () => {
    render(<App />)
    const img = screen.getByRole('img', { name: /registration/i })
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/regpass/1200/400')
  })
})
