import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('Be').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Smart New Future')).toBeInTheDocument()
    expect(screen.getByText('Top Features That Set Us Apart')).toBeInTheDocument()
    expect(screen.getByText('Services We Provide')).toBeInTheDocument()
    expect(screen.getByText('Featured Products')).toBeInTheDocument()
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument()
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Bezel — Smartwatch Landing')
  })
})
