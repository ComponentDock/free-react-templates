import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in order', () => {
    render(<App />)
    expect(screen.getAllByText('Cleanpage').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('We Help to Build You the Product')).toBeInTheDocument()
    expect(screen.getByText('What We Can Do for You')).toBeInTheDocument()
    expect(screen.getByText('Business Strategy')).toBeInTheDocument()
    expect(screen.getByText('Interesting Facts')).toBeInTheDocument()
    expect(screen.getByText('Recent Projects')).toBeInTheDocument()
    expect(screen.getByText('My satisfied customer says')).toBeInTheDocument()
    expect(screen.getByText('Case Study')).toBeInTheDocument()
    expect(screen.getByText('Our Best Pricing')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Cleanpage — Business Consulting Template')
  })
})
