import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('Snowline')).toBeInTheDocument()
    expect(screen.getByText('Winter Fashion')).toBeInTheDocument()
    expect(screen.getByText('Fashion Collection 2024')).toBeInTheDocument()
    expect(screen.getByText('Shop Now')).toBeInTheDocument()
    expect(screen.getByText('Shop for Men')).toBeInTheDocument()
    expect(screen.getByText('New Arrival')).toBeInTheDocument()
    expect(screen.getByText('Free Shipping')).toBeInTheDocument()
    expect(screen.getByText('Category')).toBeInTheDocument()
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Snowline — Fashion E-Commerce Shop Landing Page')
  })
})
