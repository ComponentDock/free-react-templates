import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText(/Kings land, New York/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Insight').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText(/We help you to grow your business/)).toBeInTheDocument()
    expect(screen.getByText('Adam Smith')).toBeInTheDocument()
    expect(screen.getByText('What we do for you')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Completed Cases')).toBeInTheDocument()
    expect(screen.getByText('Our Recent News')).toBeInTheDocument()
    expect(screen.getByText('Request for Call Back')).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Insight — Consulting Company Landing Template')
  })
})
