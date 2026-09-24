import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full page layout', () => {
    render(<App />)
    expect(screen.getAllByText('Scoop').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText(/Editor's Choice/)).toBeInTheDocument()
    expect(screen.getByText(/Latest News/)).toBeInTheDocument()
    expect(screen.getByText(/Travel and food/)).toBeInTheDocument()
    expect(screen.getByText(/Wedding adventure/)).toBeInTheDocument()
    expect(screen.getByText(/Most Popular News/)).toBeInTheDocument()
    expect(screen.getByText(/Social Networks/)).toBeInTheDocument()
    expect(screen.getAllByText(/Newsletter/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Best Product Deals/)).toBeInTheDocument()
    expect(screen.getByText(/Tech Culture/)).toBeInTheDocument()
    expect(screen.getByText(/Brilliant Ideas/)).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Scoop — News & Magazine Template')
  })
})
