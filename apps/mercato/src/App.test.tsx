import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Mercato wordmark', () => {
    render(<App />)
    expect(screen.getByText('Mercato')).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByText(/Nike New/i)).toBeInTheDocument()
  })

  it('renders the features section', () => {
    render(<App />)
    expect(screen.getByText('Free Delivery')).toBeInTheDocument()
  })

  it('renders the product carousel', () => {
    render(<App />)
    expect(screen.getAllByText('Latest Products').length).toBeGreaterThan(0)
  })

  it('renders the exclusive deal section', () => {
    render(<App />)
    expect(screen.getByText('Exclusive Hot Deal Ends Soon!')).toBeInTheDocument()
  })

  it('renders the brand logos section', () => {
    render(<App />)
    expect(screen.getByAltText('Brand 1')).toBeInTheDocument()
  })

  it('renders the deals of the week section', () => {
    render(<App />)
    expect(screen.getByText('Deals of the Week')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Mercato — Ecommerce Template')
  })
})
