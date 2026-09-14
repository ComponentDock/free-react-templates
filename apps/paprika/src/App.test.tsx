import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Paprika').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Welcome To Our')).toBeInTheDocument()
    expect(screen.getByText('Pizzas')).toBeInTheDocument()
    expect(screen.getByText('Book a')).toBeInTheDocument()
    expect(screen.getByText('Our')).toBeInTheDocument()
    expect(screen.getByText('Meet')).toBeInTheDocument()
    expect(screen.getAllByText('Events').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    expect(screen.getByText('About Paprika')).toBeInTheDocument()
  })

  it('links to Component Dock in footer', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
