import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full page with all sections', () => {
    render(<App />)
    expect(screen.getAllByText('Vow').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('New Collection')).toBeInTheDocument()
    expect(screen.getByText('promo prices')).toBeInTheDocument()
    expect(screen.getByText('new arrivals')).toBeInTheDocument()
    expect(screen.getByText('Mix')).toBeInTheDocument()
    expect(screen.getByText('testimonials')).toBeInTheDocument()
    expect(screen.getByText('subscribe for a 20% discount')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Vow — Fashion Shop Template')
  })
})
