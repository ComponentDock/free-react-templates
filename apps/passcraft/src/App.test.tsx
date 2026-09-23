import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders login form', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('your-email@gmail.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument()
  })

  it('renders Component Dock footer', () => {
    render(<App />)
    expect(screen.getByText('More templates at Component Dock')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('PassCraft — Login Form Template')
  })

  it('renders hero image on desktop', () => {
    render(<App />)
    const heroImages = screen.getAllByRole('img', { name: /decorative hero image/i })
    expect(heroImages.length).toBeGreaterThanOrEqual(1)
  })
})
