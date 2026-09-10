import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Platter heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Book a Table')
  })

  it('renders the decorative subheading', () => {
    render(<App />)
    expect(screen.getByText(/Check out our place/)).toBeInTheDocument()
  })

  it('renders step indicator showing 1 / 3', () => {
    render(<App />)
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('renders the NEXT button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('renders the restaurant brand in the navbar', () => {
    render(<App />)
    expect(screen.getByText('Platter')).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
