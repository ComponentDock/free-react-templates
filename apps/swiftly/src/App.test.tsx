import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByText('Swiftly')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /get paid easily/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByText('Awesome Features')).toBeInTheDocument()
    expect(screen.getByText('Cool Features')).toBeInTheDocument()
    expect(screen.getByText('Our Pricing')).toBeInTheDocument()
    expect(screen.getByText('Blog Posts')).toBeInTheDocument()
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
  })

  it('renders Component Dock link in footer', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
