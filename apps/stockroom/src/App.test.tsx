import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders sidebar with logo', () => {
    render(<App />)
    const logos = screen.getAllByText('Stockroom')
    expect(logos.length).toBeGreaterThanOrEqual(1)
  })

  it('renders product grid', () => {
    render(<App />)
    expect(screen.getAllByRole('link').length).toBeGreaterThanOrEqual(9)
  })

  it('renders newsletter section', () => {
    render(<App />)
    expect(screen.getByText('Subscribe for a')).toBeInTheDocument()
  })

  it('renders footer with Component Dock', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
