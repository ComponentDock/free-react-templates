import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText(/Welcome to Studium/i)).toBeInTheDocument()
    expect(screen.getByText(/Browse Online Course Category/i)).toBeInTheDocument()
    expect(screen.getByText(/Pick Your Course/i)).toBeInTheDocument()
    expect(screen.getByText(/Learn Anything You Want Today/i)).toBeInTheDocument()
    expect(screen.getByText(/What Are Students Says/i)).toBeInTheDocument()
    expect(screen.getByText(/We Are Studium An Online Learning Center/i)).toBeInTheDocument()
    expect(screen.getByText(/Why Choose Studium/i)).toBeInTheDocument()
    expect(screen.getByText(/Recent Post/i)).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/i)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Studium — Online Learning Platform')
  })
})
