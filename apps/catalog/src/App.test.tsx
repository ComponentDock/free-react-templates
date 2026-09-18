import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    const spy = vi.spyOn(document, 'title', 'set')
    render(<App />)
    expect(spy).toHaveBeenCalledWith('Catalog — Directory & Listing Template')
    spy.mockRestore()
  })

  it('renders the navbar', () => {
    render(<App />)
    expect(screen.getByText('Catalog')).toBeInTheDocument()
  })

  it('renders the hero', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome To Catalog')
  })

  it('renders the featured ads section', () => {
    render(<App />)
    expect(screen.getByText('Featured Ads')).toBeInTheDocument()
  })

  it('renders the popular categories section', () => {
    render(<App />)
    expect(screen.getByText('Popular Categories')).toBeInTheDocument()
  })

  it('renders the trending today section', () => {
    render(<App />)
    expect(screen.getByText('Trending Today')).toBeInTheDocument()
  })

  it('renders the testimonials section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
  })

  it('renders the blog section', () => {
    render(<App />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })

  it('renders the newsletter section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
