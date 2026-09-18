import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders the full page', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText('We Are Creative Agency')).toBeInTheDocument()
    expect(screen.getByText('Welcome to Website')).toBeInTheDocument()
    expect(screen.getByText('Featured Works')).toBeInTheDocument()
    expect(screen.getByText('What we offer')).toBeInTheDocument()
    expect(screen.getByText('Pricing Table')).toBeInTheDocument()
    expect(screen.getByText('Our Team')).toBeInTheDocument()
    expect(screen.getByText('Recent News')).toBeInTheDocument()
    expect(screen.getByText('Get in touch')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Vivid — Creative Agency')
  })
})
