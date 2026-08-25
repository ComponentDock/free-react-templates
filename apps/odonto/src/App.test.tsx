import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the full Odonto template', () => {
    render(<App />)
    expect(screen.getAllByText('Odonto').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Dentist Services that You Can Trust')).toBeInTheDocument()
    expect(screen.getByText('Toothcare Services')).toBeInTheDocument()
    expect(screen.getByText('Qualified Dentist')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent From Blog/ })).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
