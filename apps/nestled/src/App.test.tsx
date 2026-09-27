import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Nestled — Real Estate Template')
  })

  it('composes the full page', () => {
    render(<App />)
    expect(screen.getByText('Nestled')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText('We will help you find your home')).toBeInTheDocument()
    expect(screen.getByText('Properties')).toBeInTheDocument()
    expect(screen.getByText('Ask our Customer Service')).toBeInTheDocument()
    expect(screen.getByText('Why Us')).toBeInTheDocument()
    expect(screen.getByText('Matthew Smith')).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
