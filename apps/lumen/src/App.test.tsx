import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(document.title).toBe('Lumen — Creative Agency Portfolio')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Welcome to Lumen')).toBeInTheDocument()
    expect(screen.getByText('We Are Lumen')).toBeInTheDocument()
    expect(screen.getByText('What We Do')).toBeInTheDocument()
    expect(screen.getByText('Recent Works')).toBeInTheDocument()
    expect(screen.getByText('Our Clients')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })
})
