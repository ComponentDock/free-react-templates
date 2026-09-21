import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Strider brand name', () => {
    render(<App />)
    expect(screen.getByText('Strider')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Strider — Fashion E-Commerce Shop Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText(/Stride Into/)).toBeInTheDocument()
    expect(screen.getByText('Free Delivery')).toBeInTheDocument()
    expect(screen.getByText("Men's Collection")).toBeInTheDocument()
    expect(screen.getByText('Latest Products')).toBeInTheDocument()
    expect(screen.getByText('Fashion Up To 50% Off')).toBeInTheDocument()
    expect(screen.getByText('Deals of the Week')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })
})
