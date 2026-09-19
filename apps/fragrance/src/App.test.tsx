import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Fragrance brand name', () => {
    render(<App />)
    expect(screen.getByText('Fragrance')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Fragrance — Fashion E-commerce Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Shop is fun')).toBeInTheDocument()
    expect(screen.getByText('Trending Product')).toBeInTheDocument()
    expect(screen.getByText('Up To 50% Off')).toBeInTheDocument()
    expect(screen.getByText('Best Sellers')).toBeInTheDocument()
    expect(screen.getByText('Latest News')).toBeInTheDocument()
    expect(screen.getByText('Get Update From Anywhere')).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
