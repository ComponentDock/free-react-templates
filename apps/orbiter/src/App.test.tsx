import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the Orbiter navbar', () => {
    render(<App />)
    expect(screen.getByText('Orbiter')).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByText('Welcome To Our Site')).toBeInTheDocument()
  })

  it('renders the welcome section', () => {
    render(<App />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders the why choose us section', () => {
    render(<App />)
    expect(screen.getByText('Why Orbiter?')).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<App />)
    expect(screen.getByText('Grow your business')).toBeInTheDocument()
  })

  it('renders the blog section', () => {
    render(<App />)
    expect(screen.getByText('Recent Blog Posts')).toBeInTheDocument()
  })

  it('renders the testimonials section', () => {
    render(<App />)
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText('About Orbiter.')).toBeInTheDocument()
  })

  it('renders the Component Dock link in footer', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
