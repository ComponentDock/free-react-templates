import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders every section of the template in source order', () => {
    render(<App />)

    expect(document.title).toBe('Statecraft — Consulting Firm')
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/advance the world/)
    expect(screen.getByText('Who We Are')).toBeInTheDocument()
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0)
    expect(screen.getByText('Why Choose Us?')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Top Stories' })).toBeInTheDocument()
    expect(screen.getByText('Latest Blog')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })
})
