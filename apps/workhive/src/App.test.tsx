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
    expect(document.title).toBe('Workhive — Coworking & Shared Workspace Template')
  })

  it('renders the navbar with logo', () => {
    render(<App />)
    expect(screen.getAllByText('Workhive').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the hero heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Amazing workspace you will love',
    )
  })

  it('renders the about section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Premium quality spaces/i })).toBeInTheDocument()
  })

  it('renders the testimonials section', () => {
    render(<App />)
    expect(screen.getAllByText(/Spaces that you'd love/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the spaces section', () => {
    render(<App />)
    expect(
      screen.getAllByRole('link', { name: /explore more spaces/i }).length,
    ).toBeGreaterThanOrEqual(1)
  })

  it('renders the features section', () => {
    render(<App />)
    expect(screen.getByText('Features')).toBeInTheDocument()
  })

  it('renders the blog section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Company Insights' })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
