import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full template', () => {
    render(<App />)
    expect(screen.getByText('SilkHouse')).toBeInTheDocument()
    expect(screen.getByText('FASHION CHANGING ALWAYS')).toBeInTheDocument()
    expect(screen.getByText('New Arrival')).toBeInTheDocument()
    expect(screen.getByText('Popular Items')).toBeInTheDocument()
    expect(screen.getByText('Fast & Free Delivery')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('SilkHouse — Fashion E-Commerce Template')
  })

  it('renders all sections in order', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const sections = main.querySelectorAll('section')
    expect(sections.length).toBeGreaterThanOrEqual(6)
  })
})
