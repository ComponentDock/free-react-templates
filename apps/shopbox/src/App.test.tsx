import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Shopbox').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Curated Collections')).toBeInTheDocument()
    expect(screen.getByText('Shop by Category')).toBeInTheDocument()
    expect(screen.getByText('Featured Products')).toBeInTheDocument()
    expect(screen.getByText('Season Sale — Up to 50% Off')).toBeInTheDocument()
    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
    expect(screen.getByText('From the Blog')).toBeInTheDocument()
    expect(screen.getByText('Subscribe to Our Newsletter')).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders main content area', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('has flex min-h-screen layout', () => {
    const { container } = render(<App />)
    const root = container.firstChild as HTMLElement
    expect(root.className).toContain('flex')
    expect(root.className).toContain('min-h-screen')
  })
})
