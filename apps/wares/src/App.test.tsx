import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('WARES').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByLabelText('Search products')).toBeInTheDocument()
    expect(screen.getByText('New Collection')).toBeInTheDocument()
    expect(screen.getByText('Hot Deal')).toBeInTheDocument()
    expect(screen.getByText('New Product')).toBeInTheDocument()
    expect(screen.getByText('Deals Of The Day')).toBeInTheDocument()
    expect(screen.getByText('Latest Products')).toBeInTheDocument()
    expect(screen.getByText('Picked For You')).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Wares — E-Commerce Template')
  })
})
