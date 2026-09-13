import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and footer with correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('TechVault — E-Commerce Tech Store Template')

    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    expect(screen.getByText('Tech')).toBeInTheDocument()
    expect(screen.getByText('Vault')).toBeInTheDocument()

    expect(screen.getByText(/New Era of/)).toBeInTheDocument()
    expect(screen.getByText('Best Sellers')).toBeInTheDocument()
    expect(screen.getByText('Hot New Arrivals')).toBeInTheDocument()
    expect(screen.getByText('Sign up for Newsletter')).toBeInTheDocument()

    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
