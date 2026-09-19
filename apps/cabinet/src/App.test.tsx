import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getAllByText('Cabinet').length).toBeGreaterThanOrEqual(1)
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Cabinet — Furniture Template')
  })

  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByText(/Free delivery on orders over/)).toBeInTheDocument()
    expect(screen.getByText('Furniture at cost')).toBeInTheDocument()
    expect(screen.getByText('Popular products')).toBeInTheDocument()
    expect(screen.getByText('Manufacturer')).toBeInTheDocument()
    expect(screen.getByText('Join our newsletter')).toBeInTheDocument()
  })
})
