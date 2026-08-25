import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBeGreaterThanOrEqual(3)
  })

  it('renders navigation', () => {
    render(<App />)
    expect(screen.getAllByText('Crest').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    expect(screen.getByText('More templates at Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders all section headings', () => {
    render(<App />)
    expect(screen.getByText('Happier customers')).toBeInTheDocument()
    expect(screen.getByText('Improved Digital Experience')).toBeInTheDocument()
    expect(screen.getByText('Handpicked by Crest')).toBeInTheDocument()
  })

  it('renders the hero CTA', () => {
    render(<App />)
    expect(screen.getAllByText('Get Started').length).toBeGreaterThanOrEqual(2)
  })
})
