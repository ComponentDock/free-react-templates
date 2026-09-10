import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    expect(screen.getByText('Sub Head, Motto or Mission subtitle')).toBeDefined()
    expect(screen.getByText(/About Our BizPlanner/i)).toBeDefined()
    expect(screen.getByText(/Services We Provide/i)).toBeDefined()
    expect(screen.getByText(/Our Awesome Projects/i)).toBeDefined()
    expect(screen.getByText('Our Happy Clients')).toBeDefined()
    expect(screen.getByText('Pricing Plans')).toBeDefined()
    expect(screen.getByText(/Our Latest Blog/i)).toBeDefined()
    expect(screen.getByText('Contact Us')).toBeDefined()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toBeDefined()
  })

  it('renders navigation links', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /home/i })).toBeDefined()
    expect(screen.getByRole('link', { name: /about/i })).toBeDefined()
    expect(screen.getByRole('link', { name: /services/i })).toBeDefined()
  })

  it('has no ColorLib references in the DOM', () => {
    const { container } = render(<App />)
    const html = container.innerHTML.toLowerCase()
    expect(html).not.toContain('colorlib')
  })
})
