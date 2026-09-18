import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Citadel — Industrial Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)

    // Header
    expect(screen.getByText('Get a Quote')).toBeInTheDocument()

    // Hero
    expect(
      screen.getByRole('heading', { name: /We provide your Industrial solution/i }),
    ).toBeInTheDocument()

    // Brand logos
    expect(screen.getByAltText('Brand 1')).toBeInTheDocument()

    // Services
    expect(screen.getByRole('heading', { name: /We provide all of your/i })).toBeInTheDocument()

    // Projects
    expect(screen.getByRole('heading', { name: /Take a look around/i })).toBeInTheDocument()

    // CTA
    expect(screen.getByText('Discuss now')).toBeInTheDocument()

    // Location info
    expect(screen.getByText('Our Location')).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
