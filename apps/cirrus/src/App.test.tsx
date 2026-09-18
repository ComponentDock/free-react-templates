import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the Cirrus brand', () => {
    render(<App />)
    const brands = screen.getAllByText('Cirrus')
    expect(brands.length).toBeGreaterThanOrEqual(2)
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Cirrus,')).toBeInTheDocument()
    expect(screen.getByText('Cloud Services')).toBeInTheDocument()
    expect(screen.getByText('Cloud Management')).toBeInTheDocument()
    expect(screen.getByText('What Our Software Can Do For You')).toBeInTheDocument()
    expect(screen.getByText(/We Always Try To Understand Users Expectation/)).toBeInTheDocument()
    expect(screen.getByText('Have any question about us?')).toBeInTheDocument()
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
    expect(screen.getByText('Our Best Pricing')).toBeInTheDocument()
    expect(screen.getByText('What Users Saying')).toBeInTheDocument()
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
