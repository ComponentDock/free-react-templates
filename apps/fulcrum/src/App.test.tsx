import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getAllByRole('contentinfo')).toHaveLength(1)
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Fulcrum — Digital Services Landing Template')
  })

  it('renders the navbar with logo', () => {
    render(<App />)
    expect(screen.getAllByText('Fulcrum').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the hero heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('We Are Digital Services')
  })

  it('renders the about section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { name: 'Services' }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the projects section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument()
  })

  it('renders the testimonials section', () => {
    render(<App />)
    expect(screen.getByText('What Clients Are Saying')).toBeInTheDocument()
  })

  it('renders the blog section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Blog Posts' })).toBeInTheDocument()
  })

  it('renders the contact section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Contact Form' })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
