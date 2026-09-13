import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('New York, NY')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Newscope')
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Featured News')).toBeInTheDocument()
    expect(screen.getByText(/Breaking: Major Climate Summit/)).toBeInTheDocument()
    expect(screen.getAllByText('Entertainment').length).toBeGreaterThan(0)
    expect(screen.getByText('Latest Articles')).toBeInTheDocument()
    expect(screen.getByText('Featured Video')).toBeInTheDocument()
    expect(screen.getByText('5039')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Newscope — Magazine News Blog Template')
  })
})
